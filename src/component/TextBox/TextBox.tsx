import * as React from "react";
import { ColorFont } from "./style";

const TextBox = () => {
    const [text, setText] = React.useState<string>("");
    const [submittedText, setSubmittedText] = React.useState<string>("");
    const [extractedText, setExtractedText] = React.useState<string>("");
    const [extractedNumber, setExtractedNumber] = React.useState<number | null>(null);
    const [currency, setCurrency] = React.useState<string>("");

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedText(text);

        // Extrai o texto ignorando sinais como ;, ', " e espaços
        const texto = text.replace(/R\$|USD\$|€|£[ :=;,'"]+/g, "").match(/[^\d.,-]+/g)?.join("") || "";

        // Extrai o número (números, ponto e vírgula)
        const numberStr = text.match(/-?\d*[.,]?\d+/g)?.join("") || "0";

        // Substitui ',' por '.' e converte para float
        const number = parseFloat(numberStr.replace(",", "."));

        // Extrai o tipo de moeda (ex: R$, USD$)
        const currencyMatch = text.replace(/[:=;,'" ]+/g, "").match(/(R\$|USD\$|€|£)/g);
        const extractedCurrency = currencyMatch ? currencyMatch[0] : "";

        setExtractedText(texto);
        setExtractedNumber(number);
        setCurrency(extractedCurrency);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const deleteText = () => {
        setText("");
        setExtractedNumber(null);
        setCurrency("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ColorFont type="text" name="text" value={text} onChange={handleChange} />
                <button type="submit">Enviar</button>
                <button type="button" onClick={deleteText}>X</button>
            </form>
            {extractedNumber !== null && (
               <p>{extractedText}</p>
            )}
        </div>
    );
};

export default TextBox;
