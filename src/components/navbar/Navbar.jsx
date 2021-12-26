import React, {useState} from 'react';
import { BiMenuAltLeft, BiX } from 'react-icons/bi';
import Logo from '../../components/logo/Logo';
import Modal from 'react-modal';
import "./navbar.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'20px',
    display: 'flex',
    flexDirection:'column',
    width:'90%',
    maxWidth:'380px',
    padding:'50px',
  },
};

Modal.setAppElement('#root');

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState("");
  let focus;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ formType, setFormType ] = useState('')

  const openModal = (form) => {
    setFormType(form)
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    focus.focus();
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  const showMenu = () => {
    setMenuOpen(menuOpen? false : true);
    setShow(menuOpen? "" : "show");
  }

  const modalForm = () => {

    if(formType === 'login'){
      return (
        <div className='modal__form-container'>
          <h3>Log in</h3>
          <form className='modal__form'>
            <label htmlFor='email'>Email:</label>
            <input ref={(_focus) => (focus = _focus)} placeholder='Enter email' type='email' id='email'/>
            <label htmlFor='password'>Password:</label>
            <input placeholder='Enter Password' type='password' id='password'/>
            <label htmlFor='rememberMe' className='modal__form-rememberMe'>
              <input type='checkbox' id='rememberMe'/> Remember me
            </label>
            <button type='submit' className='modal__form-btn'>Sign in</button>
          </form>
          <div className='modal__form-links'> 
            <a href='#'>Forgot <span>password?</span></a>
            <a href='#' onClick={()=>openModal('signup')}>Not a member? <span>Sign up</span></a>
          </div>
        </div>
      )
    }

    if(formType === 'signup'){
      return (
        <div className='modal__form-container'>
          <h3>Sign up</h3>
          <form className='modal__form'>
            <label htmlFor='email'>Email:</label>
            <input ref={(_focus) => (focus = _focus)} placeholder='Enter email' type='email' id='email'/>
            <label htmlFor='password'>Password:</label>
            <input placeholder='Enter Password' type='password' id='password'/>
            <label htmlFor='password2'>Confirm password:</label>
            <input placeholder='Re-enter Password' type='password2' id='password2'/>
            <button type='submit' className='modal__form-btn'>Register</button>
          </form>
          <div className='modal__form-links'> 
            <a href='#' onClick={()=>openModal('login')}>Already a member? <span>Log in</span></a>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="navbar">
      <div className="navbar__container">
      <ul className="menu__container-list top desktop">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
        <Logo />
        <ul className="menu__container-list bottom desktop">
          <a className="navbar__menu-btn login" onClick={()=>openModal('login')}>Login</a>
          <button className="navbar__menu-btn signup" onClick={()=>openModal('signup')}>Signup</button>
        </ul>
        {menuOpen ? <BiX onClick={showMenu} className="navbar-icon"/> : <BiMenuAltLeft className="navbar-icon" onClick={showMenu}/>}
      </div>
      <div className={`navbar__menu ${show}`}>
        <ul className="menu__container-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#clients">Client</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
          <hr />
          <ul className="menu__container-list">
            <li onClick={()=> {openModal('signup'); showMenu()} }>Signup</li>
            <li onClick={()=> {openModal('login'); showMenu()}  }>Login</li>
          </ul>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {modalForm()}
      </Modal>
    </div>
    )
  }

export default Navbar
