import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="banger">
        <div className="truck">
            <img src="truck.png" alt="" />
            <div className="net">
                <p>We Are Fast And Reliable </p>
            </div>
        </div>
        <div className="truck">
            <img src="heaset.png" alt="" />
            <div className="net">
                <p>Available For consultant </p>
            </div>
        </div>
        <div className="truck">
            <img src="heaset.png" alt="" />
            <div className="net">
                <p>We Are Fast And Reliable </p>
            </div>
        </div>
      </div>
      <div className="inc">
        <div className="inc-left">
        <div className="logo">
            <img src="logo.gif" alt="" />
        </div>
        <div className="location">
            <div className="geo">
            <i class="bi bi-geo-alt"></i>
            <p>CH AGORA, pl. Kościuszki 1, 44-900 Bytom</p>
            </div>
            <div className="geo">
            <i class="bi bi-geo-alt"></i>
            <p>CH AGORA, pl. Kościuszki 1, 44-900 Bytom</p>
            </div>
            <div className="geo">
            <i class="bi bi-geo-alt"></i>
            <p>CH AGORA, pl. Kościuszki 1, 44-900 Bytom</p>
            </div>
        </div>
        </div>
       <div className="inc-right">
       <div className="inc-middle">
            <h2>Przydatne linki</h2>
            <li>WYSYŁKA I PŁATNOŚĆ</li>
            <li>ZWROTY</li>
            <li>NASZE SALONY</li>
            <li>ZAKUPY NA RATY</li>
            <li>Blog</li>
        </div>
        <div className="inc-middle">
            <h2>Moje konto</h2>
            <li>MOJE ZAMÓWIENIA</li>
            <li>MOJE KONTO</li>
            <li>PORADNIK ZAKUPÓW</li>
            <li>LISTA ŻYCZEŃ</li>
        </div>
        <div className="inc-middle">
            <h2>Potrzebuję pomocy</h2>
            <li>KONTAKT@SIXSILVER.PL</li>
            <li>730-168-628</li>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
