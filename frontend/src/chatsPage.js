import {PrettyChatWindow} from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <PrettyChatWindow
                projectId="0c300a1d-b359-4273-b753-aab12193c79e"
                username={props.user.username}
                secret={props.user.secret}
                style={{height: "100%"}}
            />
        </div>
    );
};

export default ChatsPage;