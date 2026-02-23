import { Suspense, useState } from "react";
import { components } from "./registry";

export function App() {
  const names = Object.keys(components);
  const [active, setActive] = useState<string>(names[0] ?? "");

  const ActiveComponent = active ? components[active] : null;

  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 24px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>Registry Preview</h1>
      </header>
      <div style={{ display: "flex" }}>
        <nav style={{ width: "220px", borderRight: "1px solid #e5e7eb", padding: "16px" }}>
          {names.length === 0 && (
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              No components yet. Run:<br />
              <code>shadregistry add my-component</code>
            </p>
          )}
          {names.map((name) => (
            <button
              type="button"
              key={name}
              onClick={() => setActive(name)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                marginBottom: "4px",
                background: active === name ? "#f3f4f6" : "transparent",
                fontWeight: active === name ? 600 : 400,
              }}
            >
              {name}
            </button>
          ))}
        </nav>
        <main style={{ flex: 1, padding: "32px" }}>
          {ActiveComponent ? (
            <Suspense fallback={<div>Loading...</div>}>
              <ActiveComponent />
            </Suspense>
          ) : (
            <p style={{ color: "#6b7280" }}>Select a component</p>
          )}
        </main>
      </div>
    </div>
  );
}
