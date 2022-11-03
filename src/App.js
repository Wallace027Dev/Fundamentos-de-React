import './styles/App.css';
import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import './styles/PostForm.css';

export default function App(){
    return (
        <div className='wrapper'>
            <form className='post-form' onSubmit={()=>alert('formulário submetido')}>
                <input placeholder='Escreva uma nova história...' />
                
                <div>
                    <img src={userIcon} alt='user'/>

                    <input placeholder='Digite seu nome...' />

                    <button type='submit'>
                        <img src={paperPlaneIcon} alt='Paper plane' />

                        Publicar
                    </button>
                </div>

            </form>
        </div>
    );
}
