import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../styles/Sections.css";

export default function Section5() {
  return (
    <div className="bd-example">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://imgs.search.brave.com/u6wg9xVm_CSGdedqnwX-z6xBJ3vDgdyXU7d4_hzoTgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/Mzg5MTc0L3Bob3Rv/L2RlbGljaW91cy1o/YW1idXJnZXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/blJxTEdmVWhUSWRj/dUJIOWtyNjBuUFhw/ZDRsVFplU09lWmtB/c0dfRzV3PQ" className="d-block w-100" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW DEALS COMING SOON THIS MONTH!</h5>
              <p>Choose 3 of your burgers in just $19.99!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://imgs.search.brave.com/7gMSEn6-fbSzRlfNbDuQ1cAHMjxHgVdGHimifD2VpNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzIzMDkxNzE2MDQy/NC1uYXRpb25hbC1j/aGVlc2VidXJnZXIt/ZGF5LXN0b2NrLmpw/Zz9jPTE2eDkmcT1o/XzgzMyx3XzE0ODAs/Y19maWxs" className="d-block w-100" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW DEALS COMING SOON THIS MONTH!</h5>
              <p>Cheesy burger with loaded fries in only $10.99!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://imgs.search.brave.com/LjJ3H4lyuzWQSGKo-d_DxZhNDHLHBwVIeMoehHoWop0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmluZWRpbmluZ2xv/dmVycy5jb20vc2l0/ZXMvZy9maWxlcy94/a25mZGs2MjYvZmls/ZXMvMjAyMi0wNS9z/YWxtb25fYnVyZ2Vy/LmpwZw" className="d-block w-100" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>NEW DEALS COMING SOON THIS MONTH!</h5>
              <p>New Burger Flavours coming soon!</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}
