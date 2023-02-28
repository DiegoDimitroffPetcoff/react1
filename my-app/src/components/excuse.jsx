import { useState } from "react";

export function ExcuseGame() {

    const excuses = [
        "I have not money!", "I am feeling a litle sick", "I lost my cellphone!", "I got an emergency at the bathroom !","I have farts!"
    ]

    const excusesFamily = [
        "I want to join another family!", "I just found out I'm adopted!", "Grandma stinks!", "I think I'm pregnant!!", "I got an emergency at the bathroom !"
    ]

    const ramdon = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    }



    const [party, setParty] = useState()
    const [familyMeeting, setfamilyMeeting] = useState()
    const [office, setOffice] = useState()


    const partyExcuse = () => {
        let result = ramdon(excuses)
        setParty(result)
    }
    const familyMeetingExcuse = () => {
        let result = ramdon(excusesFamily)
        setfamilyMeeting(result)
    }

    const officeExcuse = () => {
        let result = ramdon(excuses)
        setOffice(result)
    }


    return (
        <div class="mean">
            <section id="title" class="backTitle">Dont you wanna go?</section>
            <section>
                <div>
                    <h1><button class="button-6" onClick={partyExcuse}>Party</button></h1>
                    <p>{party}</p>
                </div>
                <div><h1><button class="button-6" onClick={familyMeetingExcuse}>Family Meeting</button></h1>
                    <p> {familyMeeting}</p>
                </div>
                <div>
                    <h1><button class="button-6" onClick={officeExcuse}>Office </button></h1>
                    <p>{office}</p>
                </div>
            </section>


        </div>
    )


}