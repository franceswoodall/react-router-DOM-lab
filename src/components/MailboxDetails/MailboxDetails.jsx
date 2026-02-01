import { useParams } from 'react-router'; 

const MailboxDetails = (props) => {
    const { mailboxId } = useParams(); 
    const selectedBox = props.mailboxes.find((box) => (
        box._id === Number(mailboxId) 
    )); 

    if (!selectedBox) {
        return <h1>Mailbox not found!</h1>
    }

    return (
        <> 
            <h1>Mailbox {selectedBox._id} </h1>
            <h3>Details</h3>
            <dl>
                <dt>Box Number: </dt>
                <dd>{selectedBox._id}</dd>
                <dt>Box Owner: </dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size: </dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </>
    ) 
}; 

export default MailboxDetails; 