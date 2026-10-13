export default function Other() {
    return (
        <section className="form-other">
            <h2>Other</h2>
            <div>
                <label htmlFor="other">
                    Additional Information
                </label>
                <textarea
                    id="other"
                    name="other"
                    rows="4"
                    placeholder="You can include your hobbies, awards, volunteer projects and other relevant information here."
                />
            </div>
        </section>
    );
}