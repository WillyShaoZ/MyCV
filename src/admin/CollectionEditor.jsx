import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Field from "./Field";

export default function CollectionEditor({ config, onSaved }) {
  const { table, label, titleKey, fields, blank } = config;
  const [rows, setRows] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*").order("sort");
    if (error) setStatus(error.message);
    else setRows(data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  const patch = (id, key, value) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));

  const save = async (row) => {
    setStatus("Saving…");
    const { id, ...values } = row;
    const { error } = await supabase.from(table).update(values).eq("id", id);
    setStatus(error ? error.message : "Saved");
    if (!error) onSaved?.();
  };

  const add = async () => {
    setStatus("Adding…");
    const { data, error } = await supabase.from(table).insert(blank).select().single();
    if (error) return setStatus(error.message);
    setRows((prev) => [...prev, data]);
    setOpenId(data.id);
    setStatus("Added");
    onSaved?.();
  };

  const remove = async (row) => {
    const name = row[titleKey] || "this entry";
    // eslint-disable-next-line no-restricted-globals
    if (!window.confirm(`Delete “${name}”? This cannot be undone.`)) return;
    setStatus("Deleting…");
    const { error } = await supabase.from(table).delete().eq("id", row.id);
    if (error) return setStatus(error.message);
    setRows((prev) => prev.filter((r) => r.id !== row.id));
    setStatus("Deleted");
    onSaved?.();
  };

  if (loading) return <p className="ad-muted">Loading {label}…</p>;

  return (
    <div>
      <div className="ad-sectionhead">
        <h2>{label}</h2>
        <div className="ad-sectionhead__right">
          {status ? <span className="ad-status">{status}</span> : null}
          <button type="button" className="ad-btn" onClick={add}>
            Add {label.replace(/s$/, "")}
          </button>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="ad-muted">
          Nothing here yet — the public site is showing the built-in defaults.
        </p>
      ) : null}

      <ul className="ad-list">
        {rows.map((row) => {
          const open = openId === row.id;
          return (
            <li key={row.id} className="ad-item">
              <div className="ad-item__head">
                <button
                  type="button"
                  className="ad-item__toggle"
                  onClick={() => setOpenId(open ? null : row.id)}
                  aria-expanded={open}
                >
                  <span className="ad-item__title">{row[titleKey] || "(untitled)"}</span>
                  <span className="ad-item__sort">#{row.sort ?? 0}</span>
                </button>
                <button
                  type="button"
                  className="ad-btn ad-btn--danger"
                  onClick={() => remove(row)}
                >
                  Delete
                </button>
              </div>

              {open ? (
                <div className="ad-item__body">
                  {fields.map((f) => (
                    <Field
                      key={f.key}
                      field={f}
                      value={row[f.key]}
                      folder={table}
                      onChange={(k, v) => patch(row.id, k, v)}
                    />
                  ))}
                  <div className="ad-actions">
                    <button type="button" className="ad-btn" onClick={() => save(row)}>
                      Save
                    </button>
                    <button type="button" className="ad-btn ad-btn--ghost" onClick={load}>
                      Discard changes
                    </button>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
