import { RiDownloadCloudFill, RiGithubFill } from 'react-icons/ri'
import Button from '../../ui/Button'
import style from './Hero.module.css'
import astronaut from '../../../../public/astro-hover.webp'

const Hero = () => {
  const { hero, heroArticle, heroCtaContainer, heroBtnContent, heroImage } = style

  return (
    <section className={hero}>
      <article className={`flex-col ${heroArticle}`}>
        <h1>Marketing website done with Astro</h1>
        <p>
          Astroship is a starter template for startups, marketing websites &amp;
          landing pages. Built with Astro.build and TailwindCSS. You can quickly create any website with this starter
        </p>
        <div className={heroCtaContainer}>
          <Button>
            <p className={heroBtnContent}>
              <RiDownloadCloudFill />
              Download for Free
            </p>
          </Button>
          <Button variant="outline">
            <p className={heroBtnContent}>
              <RiGithubFill />
              GitHub Repo
            </p>
          </Button>
        </div>
      </article>
      <img
        src={astronaut}
        alt="Astronaut cartoon style in the moon"
        className={heroImage}
      />
    </section>
  )
}

export default Hero
