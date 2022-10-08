import React from 'react';
import ladyInBlue from '../img/blog-2.jpg';
import bodyBuilding from '../img/f-img-1.jpg';
import femaleImg from '../img/f-img-3.jpg';
import gymformen from '../img/abs.png';
import biceps from '../img/biceps.png';
import img2 from '../img/f-img-2.jpg';
import femaleweights from '../img/femaleweights.png';
import { Link } from "react-router-dom"

function MainBody() {
  return (
    <div className='mainbody'>
      <div className='sliderbody'>
        <div className='sliderbody-content'>
          <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            excepturi ratione harum placeat sint, adipisci eaque tenetur fuga
            asperiores ea esse dicta, non sed ex quae quisquam laborum
            voluptatum, veritatis accusamus. Illo omnis harum corrupti?
          </p>{' '}
          <br />
          <Link exact to='/join'>
            <button type='button' id='sliderbody-cont-button'>
              JOIN US
            </button>
          </Link>
        </div>
        <div className='sliderbody-img'></div>
      </div>
      <div className='about-cont'>
        <div className='about-cont-img'>
          <img src={ladyInBlue} alt='' />
        </div>
        <div className='about-cont-content'>
          <h2>About Us</h2>
          <h1>Every Day Is A Chance To Become Better</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ut similique facilis cum qui, temporibus voluptate
            necessitatibus maxime pariatur, ipsum delectus repellendus ullam
            earum, est minima placeat explicabo ex rem.
          </p>

          <div className='small-conts'>
            <div className='grid-view'>
              <h3>
                <i class='fa-solid fa-arrow-right'></i>
                <span> </span>
                Body And Mind
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, impedit!
              </p>
            </div>
            <div className='grid-view'>
              <h3>
                <i class='fa-solid fa-arrow-right'></i>
                <span> </span>
                Body And Mind
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, impedit!
              </p>
            </div>
            <div className='grid-view'>
              <h3>
                <i class='fa-solid fa-arrow-right'></i>
                <span> </span>
                Body And Mind
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, impedit!
              </p>
            </div>
            <div className='grid-view'>
              <h3>
                <i class='fa-solid fa-arrow-right'></i>
                <span> </span>
                Body And Mind
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias, impedit!
              </p>
            </div>
          </div>
          <Link to='/join'>
            <button>Join The Movement</button>
          </Link>
        </div>
      </div>
      <div className='features'>
        <fieldset>
          <legend>Gym Features</legend>
          <br />
          <div className='features-row'>
            <div className='feature'>
              <img src={bodyBuilding} alt='' />
            </div>
            <div className='featured'>
              <img src={gymformen} alt='' />
              <h3>Gym For Men</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                deleniti?
              </p>
              <button type='button'>Read More</button>
            </div>
            <div className='feature'>
              <img src={femaleImg} alt='' />
            </div>
          </div>
          <div className='features-row'>
            <div className='featured'>
              <img src={biceps} alt='' />
              <h3>Body Building</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                deleniti?
              </p>
              <button type='button'>Read More</button>
            </div>
            <div className='feature'>
              <img src={img2} alt='' />
            </div>
            <div className='featured'>
              <img src={femaleweights} alt='' />
              <h3>Gym For Women</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                deleniti?
              </p>
              <button type='button'>Read More</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default MainBody;
