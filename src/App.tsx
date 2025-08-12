import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { PlayIcon } from 'lucide-react'
import { DefaultInput } from './components/DefaultInput'

import './styles/theme.css'
import './styles/global.css'


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
                        <DefaultInput type='text' label='task:' id='textInput' placeholder='Ex: estudar para a' />
                    </div>
                    <div className="formRow">
                        <p>Foque nesse ciclo por 25 minutos</p>
                    </div>
                    <div className="formRow">
                        <p>Circlos:</p>
                        <p>0 0 0 0 0 </p>
                    </div>
                    <div className="formRow">
                        <button><PlayIcon /></button>
                    </div>
                </form>
            </Container>

        </>)

}
