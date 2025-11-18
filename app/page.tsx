export default function HomePage() {
  
  const photos = [
    { id: 1, text: "The book of Romans", image: "/1.png" },
    { id: 2, text: "Five qualitys of aman", image: "/2.png" },
    { id: 3, text: "Romans Explained", image: "/3.png" },
    { id: 4, text: "MWalking with him daily", image: "/4.png" },
    { id: 5, text: "Euangelion : Gospel", image: "/5.png" },
    { id: 6, text: "Romans 12 - 16", image: "/6.png" },
    { id: 7, text: "Romans 15 : 14", image: "/7.png" },
    { id: 8, text: "Podcast about Romans", image: "/8.png" }
  ];

  return (
     <div className="container">
      {}
      <header className="header">
        <div className="header-main">
          <div className="header-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <nav className="nav-menu" style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className="logo">YouVersion</h1>
              <button className="nav-item">Bible</button>
              <button className="nav-item">Plans</button>
              <button className="nav-item">Videos</button>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search Bible.com"
          />
          <button className="get-app-btn">Get the App</button>
            </nav>
        </div>
        </div>
        <div className="divider"></div>

        <div className="header-bottom">
          <h2 className="chapter-title">Roma 16</h2>
          <div className="action-buttons">
            <button className="action-btn">TB</button>
            <button className="action-btn">Parallel</button>
            <button className="action-btn">AA</button>
          </div>
        </div>
      </header>

      {}
      <main className="bible-content">
        <div className="chapter-section">
          <h3 className="section-title">Salam</h3>
          <p className="verse-range">16:1-16</p>
          
          <div className="verses">
            <p className="verse">
              1 Aku meminta perhatianmu terhadap Febe, saudari kita yang melayani jemaat di Kengkrea, 
              2 supaya kamu menyambut dia dalam Tuhan, sebagaimana seharusnya bagi orang-orang kudus, dan berikanlah kepadanya bantuan bila diperlukannya. Sebab ia sendiri telah memberikan bantuan kepada banyak orang, juga kepadaku sendiri.
            </p>
            
            <p className="verse">
              3 Sampaikan salam kepada Priskila dan Akwila, teman-teman sekerjaku dalam Kristus Yesus. 
              4 Mereka telah mempertaruhkan nyawanya untuk hidupku. Kepada mereka bukan aku saja yang berterima kasih, tetapi juga semua jemaat bukan Yahudi. 
              5 Salam juga kepada jemaat di rumah mereka. Salam kepada Epenetus, saudara yang kukasihi, yang adalah buah pertama dari daerah Asia untuk Kristus. 
              6 Salam kepada Maria, yang telah bekerja keras untuk kamu. 
              7 Salam kepada Andronikus dan Yunias, saudara-saudaraku sebangsa, yang pernah dipenjarakan bersama-sama dengan aku, yaitu orang-orang yang terpandang di antara para rasul dan yang telah menjadi Kristen sebelum aku.
            </p>
            
            <p className="verse">
              8 Salam kepada Ampliatus yang kukasihi dalam Tuhan. 
              9 Salam kepada Urbanus, teman sekerja kami dalam Kristus, dan salam kepada Stakhis, yang kukasihi. 
              10 Salam kepada Apeles, yang telah tahan uji dalam Kristus. Salam kepada mereka, yang termasuk isi rumah Aristobulus. 
              11 Salam kepada Herodion, temanku sebangsa. Salam kepada mereka yang termasuk isi rumah Narkisus, yang ada dalam Tuhan.
            </p>
            
            <p className="verse">
              12 Salam kepada Trifena dan Trifosa, yang bekerja membanting tulang dalam pelayanan Tuhan. Salam kepada Persis, yang kukasihi, yang telah bekerja membanting tulang dalam pelayanan Tuhan. 
              13 Salam kepada Rufus, orang pilihan dalam Tuhan, dan salam kepada ibunya, yang bagiku adalah juga ibu. 
              14 Salam kepada Asinkritus, Flegon, Hermes, Patrobas, Hermas dan saudara-saudara yang bersama-sama dengan mereka. 
              15 Salam kepada Filologus, dan Yulia, Nereus dan saudaranya perempuan, dan Olimpas, dan juga kepada segala orang kudus yang bersama-sama dengan mereka. 
              16 Bersalam-salamlah kamu dengan cium kudus. Salam kepada kamu dari semua jemaat Kristus.
            </p>
          </div>
        </div>

        <div className="chapter-section">
          <h3 className="section-title">Peringatan</h3>
          <p className="verse-range">16:17-24</p>
          
          <div className="verses">
            <p className="verse">
              Tetapi aku menasihatkan kamu, saudara-saudara, supaya kamu waspada terhadap mereka, yang bertentangan dengan pengajaran yang telah kamu terima, menimbulkan perpecahan dan godaan. Sebab itu hindarilah mereka! 
              Sebab orang-orang demikian tidak melayani Kristus, Tuhan kita, tetapi melayani perut mereka sendiri. Dan dengan kata-kata mereka yang muluk-muluk dan bahasa mereka yang manis mereka menipu orang-orang yang tulus hatinya. 
              Kabar tentang ketaatanmu telah terdengar oleh semua orang. Sebab itu aku bersukacita tentang kamu. Tetapi aku ingin supaya kamu bijaksana terhadap apa yang baik, dan bersih terhadap apa yang jahat. 
              Semoga Allah, sumber damai sejahtera, segera akan menghancurkan Iblis di bawah kakimu. Kasih karunia Yesus, Tuhan kita, menyertai kamu!
            </p>
            
            <p className="verse">
              Salam kepada kamu dari Timotius, temanku sekerja, dan dari Lukius, Yason dan Sosipater, teman-temanku sebangsa.
            </p>
            
            <p className="verse">
              Salam dalam Tuhan kepada kamu dari Tertius, yaitu aku, yang menulis surat ini.
            </p>
            
            <p className="verse">
              Salam kepada kamu dari Gayus, yang memberi tumpangan kepadaku, dan kepada seluruh jemaat. Salam kepada kamu dari Erastus, bendahara negeri, dan dari Kwartus, saudara kita.
            </p>
            
            <p className="verse">
              [Kasih karunia Yesus Kristus, Tuhan kita, menyertai kamu sekalian! Amin.]
            </p>
          </div>
        </div>

        <div className="chapter-section">
          <h3 className="section-title">Segala kemuliaan bagi Allah</h3>
          <p className="verse-range">16:25-27</p>
          
          <div className="verses">
            <p className="verse">
              Bagi Dia, yang berkuasa menguatkan kamu, – menurut Injil yang kumasyhurkan dan pemberitaan tentang Yesus Kristus, sesuai dengan pernyataan rahasia, yang didiamkan berabad-abad lamanya, 
              tetapi yang sekarang telah dinyatakan dan yang menurut perintah Allah yang abadi, telah diberitakan oleh kitab-kitab para nabi kepada segala bangsa untuk membimbing mereka kepada ketaatan iman – 
              bagi Dia, satu-satunya Allah yang penuh hikmat, oleh Yesus Kristus: segala kemuliaan sampai selama-lamanya! Amin.
            </p>
          </div>
        </div>

        {}
        <div className="buttons-container">
          <button className="custom-button">
            Popular Bible Verses from Roma 16
          </button>
          <button className="custom-button">
            Listen to Roma 16
          </button>
        </div>

        {}
        <div className="copyright-footer">
          <p className="copyright-text">
            Terjemahan Baru Bible © Indonesian Bible Society 1974, 2018.
          </p>
          <a 
            href="https://www.bible.com/versions/306-terjemahan-baru-tb" 
            className="learn-more-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More About Alkitab Terjemahan Baru
          </a>
        </div>

        {}
        <div className="photo-section">
          <h3 className="photo-section-title">Bible Reflection about Romans</h3>
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-item">
                <div className="photo-container">
                  {}
                  <img 
                    src={photo.image} 
                    alt={photo.text}
                    className="photo-image"
                  />
                </div>
                <p className="photo-text">{photo.text}</p>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="buttons-container">
          <button className="custom-button">
            Bible: Bahasa Indonesia
          </button>
          <button className="custom-button">
            Version: Alkitab Terjemahan Baru - TB
          </button>
          <button className="custom-button">
           Roma 16
          </button>
        </div>

        {}
        <footer className="youversion-footer">
          <div className="youversion-footer-content">
            <div className="mt-40px pt-30px pr-0 pl-0 pb-20px">
              <h1 >YouVersion</h1>
              <h1 className="footer-description">
                Helping you engage with the Bible every day of the year.
              </h1>
            </div>  

            <div className="footer-links-container" style={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'flex-start' , width: '100%'}}>
              <div className="footer-column">
                <h3 className="footer-column-title">MINISTRY</h3>
                <ul className="footer-links-list">
                  <li><a href="#" className="footer-link">About</a></li>
                  <li><a href="#" className="footer-link">Careers</a></li>
                  <li><a href="#" className="footer-link">Volunteer</a></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                  <li><a href="#" className="footer-link">Press</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">USEFUL LINKS</h3>
                <ul className="footer-links-list">
                  <li><a href="#" className="footer-link">Help</a></li>
                  <li><a href="#" className="footer-link">Donate</a></li>
                  <li><a href="#" className="footer-link">Bible Versions</a></li>
                  <li><a href="#" className="footer-link">Audio Bibles</a></li>
                  <li><a href="#" className="footer-link">Bible Languages</a></li>
                  <li><a href="#" className="footer-link">Verse of the Day</a></li>
                </ul>
              </div>
            </div>


            
          </div>
        </footer>
      </main>
    </div>
  )
}