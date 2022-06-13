const AddressApp = () => {

    const address = {
        forename: "Mike",
        surname:"Smith",
        line1: "9 Bull Lane",
        line2: "Chippenham",
        county: "Wiltshire",
        zip: "SN15 1UN"
        }
        return (
            <div>
                <h1>{address.forename}</h1>
                <h1>{address.surname}</h1>
                <h1>{address.line1}</h1>
                <h1>{address.line2}</h1>
                <h1>{address.zip}</h1>
            </div>
        );
    }
export default AddressApp;
