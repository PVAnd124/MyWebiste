import React , {useEffect} from 'react'
import '../styles/Contact.css'
import * as THREE from 'three';
import Earth from '../assets/360_F_341889832_gel1xvnDEnEUVcDff03DlEdqLdjK28rY.jpg'

function Contact() {
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const child = renderer.domElement;
    document.getElementById('threejs-container').appendChild(child);

    const geometry = new THREE.SphereGeometry();
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments( wireframe );
    line.material.depthTest = true;
    line.material.opacity = 1;
    line.material.transparent = false;
    scene.add(line);

    line.position.x = -2.5;
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    function updateCamera() {
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', updateCamera);

    return () => {
      window.removeEventListener('resize', updateCamera);
    }
  }, []);


  return (
    <div className="container">
      <div className="background">
        <img src={Earth}></img>
      </div>
        <div className='left'>
          <div id='threejs-container'></div>
        </div>
        <div className='right'>Hello World</div>
    </div>
  )
}

export default Contact