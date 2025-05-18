const colorNames = ['primary', 'secondary', 'success', 'danger'];

export const ColorPalette = () => (
  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
    {colorNames.map((name) => {
      const colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--color-${name}`).trim();

      return (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 4,
              backgroundColor: `var(--color-${name})`,
              border: '1px solid #ccc',
            }}
          />
          <div style={{ marginTop: 8 }}>{name}</div>
          <div style={{ fontSize: 12 }}>{colorValue}</div>
        </div>
      );
    })}
  </div>
);
