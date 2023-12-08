import jinja2
import json
import os
import sys
import html
import re
import pathlib


def to_help_str(val) -> str:
    if isinstance(val, (list, dict)):
        if len(val) == 1:
            return json.dumps(val, sort_keys=True)
        return json.dumps(val, sort_keys=True, indent=2).replace("\n", "\\n")
    return (
        str(val)
        .replace(buildroot, "<buildroot>")
        .replace(cachedir, "$XDG_CACHE_HOME")
        .replace("\\n", "\\\\n")
    )

def escape(s: str) -> str:
    return html.escape(s).replace("{", "&#123;").replace("}", "&#125;")

def unescape(s: str) -> str:
    return html.unescape(s).replace("&#123;", "{").replace("&#125;", "}")

def format_description(val: str) -> str:
    lines = []
    tabbed_block = False
    backticked_block = False
    for line in val.splitlines():
        if not tabbed_block and line.startswith("    ") and not backticked_block:
            tabbed_block = True
            if not line.startswith("    ```"):
                lines.append("```")
            lines.append(line.replace("    ", '', 1))
            continue

        if tabbed_block:
            if line.startswith("    ") or not line:
                lines.append(line.replace("    ", "", 1))
                if line.startswith("    ```"):
                    tabbed_block = False
            else:
                lines.append("```")
                lines.append("")
                tabbed_block = False
                lines.append(line)
        else:
            if line.startswith("```"):
                backticked_block = not backticked_block
                lines.append("```")
                rest = line.lstrip("`").strip(" ")
                if rest:
                    lines.append(rest)
            elif line.endswith("```"):
                backticked_block = not backticked_block
                rest = line.rstrip("`").strip(" ")
                if rest:
                    lines.append(rest)
                lines.append("```")

            elif backticked_block:
                lines.append(line)
            else:
                lines.append(re.sub(r"`(.+?)`", lambda x: f"`{unescape(x[1])}`", escape(line)))


    if tabbed_block:
        lines.append("```")

    return "\n".join(lines).replace("\n\n```", "\n```")



version = sys.argv[1]
with open(f"{version}.help-all.json") as f:
    help_info = json.load(f)

buildroot = ""
cachedir = ""
for option in help_info["scope_to_help_info"][""]["advanced"]:
    if option["config_key"] == "pants_workdir":
        buildroot = option["default"].rsplit("/", 1)[0]
    if option["config_key"] == "local_store_dir":
        cachedir = option["default"].rsplit("/", 2)[0]


env = jinja2.Environment(
    loader = jinja2.FileSystemLoader(pathlib.Path("templates").resolve()),
    autoescape=False,
)
env.filters["help_str"] = to_help_str
env.filters["format_description"] = format_description
env.filters["filter_out"] = lambda values, *args: [value for value in values if value not in args]
env.tests["goal_subsystem"] = lambda value: value in help_info["name_to_goal_info"]
subsystem_template = env.get_template("subsystem.mdx.jinja")
targets_template = env.get_template("target.mdx.jinja")


os.chdir(version)

pathlib.Path("reference").mkdir(exist_ok=True)
pathlib.Path(f"reference/global-options.mdx").write_text(subsystem_template.render(subsystem=help_info["scope_to_help_info"][""], goal_info=None))
for info in help_info["scope_to_help_info"].values():
    if not info["scope"]:
         continue

    parent = "goals" if info["is_goal"] else "subsystems"
    pathlib.Path(f"reference/{parent}").mkdir(parents=True, exist_ok=True)
    pathlib.Path(f"reference/{parent}/{info['scope']}.mdx").write_text(
        subsystem_template.render(subsystem=info, goal_info=help_info["name_to_goal_info"].get(info['scope']))
    )

for info in help_info["name_to_target_type_info"].values():
    if info["alias"].startswith("_"):
        continue

    pathlib.Path("reference/targets").mkdir(parents=True, exist_ok=True)
    pathlib.Path(f"reference/targets/{info['alias']}.mdx").write_text(
        targets_template.render(target=info)
    )

pathlib.Path("reference/goals/_category_.json").write_text('{\n  "label": "Goals"\n}\n')
pathlib.Path("reference/subsystems/_category_.json").write_text('{\n  "label": "Subsystems"\n}\n')
pathlib.Path("reference/targets/_category_.json").write_text('{\n  "label": "Targets"\n}\n')
