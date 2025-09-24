/* eslint-disable react/prop-types */

export default function Panel({ title, children, isActive, onActive }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="buttonStyle" onClick={onActive}>
          Show
        </button>
      )}
    </section>
  );
}
