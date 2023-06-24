import Image from "next/image";
import classes from "./Download.module.css";
import Link from "next/link";

const Download = () => {
  return (
    <div className="container">
      <div className={classes.title}>
        <Link href="/" className={classes.imgLink}>
          <Image
            className={classes.imgLogo}
            src="/logo.png"
            alt="logo"
            width={350}
            height={100}
          />
        </Link>
        <a
          className={classes.link}
          href="./logo.png"
          download
          rel="noopener"
        >
          Скачать
        </a>
      </div>
      <div className={classes.content}>
        <h1>ИНСТРУКЦИЯ</h1>
        <div className={classes.instruction}>
          <div>
            <h2>1</h2>
            <p>
              Скачать и распаковать Byster в любом удобном для вас месте.
              Запустить Byster
            </p>
            <Image
              src="/first_image.png"
              alt="first_image"
              width={939}
              height={522}
            />
          </div>
        </div>
        <div className={classes.instruction}>
          <h3>Регистрация в Byster</h3>
          <div>
            <Image
              src="/second_image.png"
              alt="first_image"
              width={340}
              height={470}
            />
            <p>
              Перед вами откроется окно регистрации. Придумайте логин и пароль и
              последним пунктом укажите откуда вы узнали о бустере.
            </p>
            <h2>2</h2>
          </div>
        </div>
        <div className={classes.instruction}>
          <h3>Получение бесплатного теста</h3>
          <div>
            <h2>3</h2>
            <p>
              После того как вы успешно зарегистрировались в Byster{"'"}е,
              переходите в магазин, и выбираете интересующий вас спек, под ним
              будет кнопка теста
            </p>
            <Image
              src="/third_image.png"
              alt="first_image"
              width={971}
              height={582}
            />
          </div>
        </div>
        <div className={classes.instruction}>
          <h3>Запуск Byster{'"'}а в игре</h3>
          <div>
            <Image
              src="/fourth_image.png"
              alt="first_image"
              width={973}
              height={580}
            />
            <p>
              Для начала стоит запустить Byster, потом следует открыть
              WoW(порядок не важен) далее на главной странице выбратьдоступного
              персонажа в WoW слева вверху. И нажать запустить
            </p>
            <h2>4</h2>
          </div>
        </div>
        <div className={classes.instruction}>
          <h3>Настройка игрового меню</h3>
          <div>
            <h2>5</h2>
            <p>
              После того как вы запустили Byster в игре, нужно его настроить, а
              именно расставить галочки так, как вам удобнее (при наведении на
              галочку, будет информация о том, что она меняет). Чтобы Byster
              начал свою работу, необходимо вступить в бой с целью.{" "}
            </p>
            <Image
              src="/fifth_image.png"
              alt="first_image"
              width={530}
              height={700}
            />
          </div>
        </div>
        <div data-aos="fade-up" className={classes.instruction}>
          <h3>Видеоинструкция</h3>
          <div className={classes.iframe}>
            <iframe
              width="997"
              height="561"
              src="https://www.youtube.com/embed/JXbQaxOAk2E"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
