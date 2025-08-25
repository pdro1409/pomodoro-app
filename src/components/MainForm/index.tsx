import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaulButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
        <form className='form' action="">
            <div className="formRow">
                <DefaultInput type='text' labelText='task:' id='textInput' placeholder='Ex: Estudar css' />
            </div>
            <div className="formRow">
                <>Foque nesse ciclo por 25 minutos</>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <DefaulButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}