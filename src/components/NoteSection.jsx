function NoteSection() {
    return (
        <section className="notes">
            <h2>What is React?</h2>
            <p>
                React is a JavaScript library used to build fast and interactive user
                interfaces using reusable components.
            </p>

            <pre>
                <code>
                    {`function App() {
  return <h1>Hello React</h1>;
}`}
                </code>
            </pre>
        </section>
    );
}

export default NoteSection;
