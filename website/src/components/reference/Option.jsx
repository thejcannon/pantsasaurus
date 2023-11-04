export default function Option({
  children,
  toml_repr,
  cli_repr,
  env_repr,
  one_of,
  default_repr,
  deprecated_version,
  deprecated_hint,
}) {
  return (
    <div className="margin-bottom--lg">
      <code style={{ color: "var(--pants-reference-option-repr)"}}>{cli_repr}</code>
      <br/>
      <code style={{ color: "var(--pants-reference-option-repr)" }}>{env_repr}</code>
      <br />
      <div style={{ paddingLeft: "2em" }}>
        <span style={{ color: "var(--ifm-color-success)" }}>
          {
            one_of &&
              <span >
                one of: <code>{one_of}</code>
                <br />
              </span>
          }
          default: <code>{default_repr}</code>
        </span>
        <br />
        {deprecated_version &&
          <span style={{ color: "var(--ifm-color-danger-darkest)" }}>
            Deprecated, will be removed in version: {deprecated_version}.
            <br />
            {deprecated_hint}
            <br />
          </span>
        }
        {children}
      </div>
    </div>
  );
}
