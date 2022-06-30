import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
      pagina="Nosotros"
    >
      <main className='contenedor'>
        <h2 className='heading'>Sobre Nosotros</h2>
        <div className={styles.contenido}>
          <Image alt="Sobre Nosotros" layout='responsive' width={600} height={450} src="/img/nosotros.jpg"/>
          <div>
            <p>Suspendisse vestibulum urna et scelerisque egestas. Aenean in porttitor nisi. Integer ipsum lacus, congue a maximus in,condimentum nec odio. Vivamus libero sapien, tempus vel malesuada at, facilisis in nunc. Vestibulum sagittis, massa non dignissim rutrum, dolor sem viverra sapien, vitae vestibulum nisl diam pharetra orci. Aenean vel est eros. Vestibulum mattis dignissim libero sit amet tincidunt. Aliquam bibendum ac odio eget pretium.</p>
            
            <p>Suspendisse vestibulum urna et scelerisque egestas. Aenean in porttitor nisi. Integer ipsum lacus, congue a maximus in,condimentum nec odio. Vivamus libero sapien, tempus vel malesuada at, facilisis in nunc. Vestibulum sagittis, massa non dignissim rutrum, dolor sem viverra sapien, vitae vestibulum nisl diam pharetra orci. Aenean vel est eros. Vestibulum mattis dignissim libero sit amet tincidunt. Aliquam bibendum ac odio eget pretium.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros