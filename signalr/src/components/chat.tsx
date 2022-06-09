

export const Chat = () => {

    return (
        <>
            <div id="divMessages" className="messages">
            </div>
            <div className="input-zone">
                <label id="lblMessage" htmlFor="tbMessage">Message:</label>
                <input id="tbMessage" className="input-zone-input" type="text" />
                <button id="btnSend">Send</button>
            </div>
        </>
    )
}