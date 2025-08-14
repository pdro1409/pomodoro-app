import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { PlayCircleIcon } from 'lucide-react'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'

import './styles/theme.css'
import './styles/global.css'
import { DefaulButton } from './components/DefaultButton'


export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput type='text' labelText='task:' id='textInput' placeholder='Ex: Estudar css' />
                    </div>
                    <div className="formRow">
                        <p>Foque nesse ciclo por 25 minutos</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
                    </div>
                    <div className="formRow">
                        <DefaulButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
            </Container>

        </>)

}
