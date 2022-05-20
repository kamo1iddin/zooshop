import './../css/Header.css';
import logo from './../img/logo.png';

let Header;

Header = () =>
{
    return(
        <header>
            <img src={logo}/>

            <div className='buttons b1'>Инфо</div>
            <div className='buttons'>Подача</div>
            <div className='buttons'>Для собак</div>
            <div className='buttons'>Для кошек</div>
            <div className='buttons'>Для птиц</div>
            <div className='buttons'>Для грызунов</div>
            <div className='buttons'>Для рыбы</div>
            <div className='buttons'>Цены на товары</div>
        </header>
    );
};

export default Header;