import classes from './hero.module.css';
import Image from 'next/image';

export const Hero = () => {

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src="/images/site/max.png"
                    alt="An image showing Max"
                    width={300}
                    height={300}
                />
            </div>
            <h1>
                Hi, I'm Max
            </h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem illum delectus magnam deserunt, assumenda dolorum amet sunt fuga saepe eum veniam ex nam, perferendis consectetur odit adipisci? Fugiat, quidem.
            </p>
        </section>
    )
}