import './../css/Items.css';
import catsFood from './../img/catsFood.png';
import catsFoodBeef from './../img/catsFoodBeef.png';
import catsFoodFish from './../img/catsFoodFish.png';
import catsFoodShrimp from './../img/catsFoodShrimp.png';
import catsFoodLamb from './../img/catsFoodLamb.png';
import animonda from './../img/animonda.png';

let Items;

Items = () =>
{
    return(
        <div className='popularItems'>
            <div className='title'>Популярные товары</div>

            <div className='items'>
                <div className='item'>
                    <img src={catsFood}/>
                    <div className='itemInfo'>Консерва для кошек с курицей Nuevo Super Premium Cat Adult Chicken 200 гр</div>
                    <div className='itemPrice'>$1.52</div>
                </div>
                <div className='item'>
                    <img src={catsFoodBeef}/>
                    <div className='itemInfo'>Консерва для кошек с говядиной Nuevo Super Premium 400 гр</div>
                    <div className='itemPrice'>$2.30</div>
                </div>
                <div className='item'>
                    <img src={catsFoodFish}/>
                    <div className='itemInfo'>Консервы для кошек с курицей и лососем Nuevo Super Premium Cat Adult Chicken & Salmon 400 гр</div>
                    <div className='itemPrice'>$2.30</div>
                </div>
                <div className='item'>
                    <img src={catsFoodShrimp}/>
                    <div className='itemInfo'>Консерва для кошек с курицей и креветками Nuevo Super Premium Cat Adult Chicken & Shrimps 400 гр</div>
                    <div className='itemPrice'>$2.30</div>
                </div>
                <div className='item'>
                    <img src={catsFoodLamb}/>
                    <div className='itemInfo'>Консервы для кошек, баранина с клюквой Nuevo Super Premium Cat Senior Lamb 400 гр</div>
                    <div className='itemPrice'>$2.30</div>
                </div>
                <div className='item'>
                    <img src={animonda}/>
                    <div className='itemInfo'>Animonda vom Feinsten взрослый 100гр</div>
                    <div className='itemPrice'>$1.13</div>
                </div>
                <div className='item'>
                    <img src={catsFoodLamb}/>
                    <div className='itemInfo'>Консервы для кошек, баранина с клюквой Nuevo Super Premium Cat Senior Lamb 200 гр</div>
                    <div className='itemPrice'>$1.78</div>
                </div>
                <div className='item'>
                    <img src={catsFood}/>
                    <div className='itemInfo'>Консерва для кошек с курицей Nuevo Super Premium Cat Adult Chicken 400 гр</div>
                    <div className='itemPrice'>$2.24</div>
                </div>
            </div>

            <div className='shopButton'>Магазин</div>
        </div>
    );
};

export default Items;