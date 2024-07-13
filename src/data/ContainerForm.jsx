export const formSection = {
    content: `  
<section className="section__container client__container" id="tutorial">
        <h2 className="section__header">Apakah Masih mengalami kesulitan ?</h2>
        <p className="section__description">
          kami akan menyediakan video tutorial youtube untuk melihat bagaimana cara melaporkan tumpukan sampah.
        </p>
        <div className="client__swiper">
          <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="client__card">
                        <iframe width="630" height="365" src="https://www.youtube.com/embed/TUXcukwUxqw" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </section>
  

    <section className="section__container client__container" id="form" style="margin-top: 30px;">
      <h2 className="section__header">Ayo Laporkan Tumpukan Sampah di sekitar Anda</h2>
      <p className="section__description">
          Silahkan isi form laporan berikut ini dengan tepat dan apa Adanya.Kontribusi anda sangat berarti bagi kita semua demi menciptakan lingkungan yang bersih bebas sampah.
      </p>
  
      <div className="container_form">
          <div className="map-container">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8442247219484!2d-122.08424968469379!3d37.422065879825864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5c0e0c35%3A0x3030bfbca0ec4ed3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1588899921473!5m2!1sen!2sus"
                  width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
              </iframe>
          </div>
          <div className="form">
              <form action="#" method="POST" enctype="multipart/form-data">
                  <div className="form-group">
                      <label for="form-name">Nama:</label>
                      <input type="text" className="form-control" id="form-name" name="name" required>
                  </div>
  
                  <div className="form-group">
                      <label for="form-email">Email:</label>
                      <input type="email" className="form-control" id="form-email" name="email" required>
                  </div>
  
                  <div className="form-group">
                      <label for="form-wa">WhatsApp:</label>
                      <input type="text" className="form-control" id="form-wa" name="wa" required>
                  </div>
  
                  <div className="form-group">
                      <label for="form-kategori">Kategori Tumpukan:</label>
                      <select className="form-control" id="form-kategori" name="kategori" required>
                          <option value="" hidden>Pilih kategori</option>
                          <option value="parah">Parah</option>
                          <option value="sedang">Sedang</option>
                          <option value="kecil">Kecil</option>
                      </select>
                  </div>
  
                  <div className="form-group">
                      <label for="form-deskripsi">Deskripsi:</label>
                      <textarea className="form-control" id="form-deskripsi" name="deskripsi" rows="4" required></textarea>
                  </div>
  
                  <div className="form-group">
                      <label for="form-foto">Foto:</label>
                      <input type="file" className="form-control-file" id="form-foto" name="foto" accept="image/*" required>
                  </div>

                
                <button class="button-3" role="button">Submit</button>


              </form>
          </div>
      </div>
  </section>`
    }













