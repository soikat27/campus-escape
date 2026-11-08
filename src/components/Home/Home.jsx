import styles from "./Home.module.css";
import { Link } from "react-router";
import travelPhoto from "../../assets/image/travel-photo.jpg";
import restaurantPhoto from "../../assets/image/restaurant.jpg";
import museumPhoto from "../../assets/image/museum.jpg";
import shopPhoto from "../../assets/image/souvenir-shop.jpg";
import parkPhoto from "../../assets/image/park.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <img
          className={styles.introBg}
          src={travelPhoto}
          alt="Friends traveling together"
        />
        <div className={styles.introOverlay} />
        <div className={styles.introContent}>
          <h1 className={styles.introTitle}>Escape and Recharge</h1>
          <p className={styles.introCopy}>
            <strong className={styles.emphasis}>Gettysburg</strong> is known for
            its history but there is more beyond the battlefield. Whether
            you&apos;re a Gettysburg College student ready to get off campus or
            just looking for somewhere new,{" "}
            <strong className={styles.emphasis}>Campus&nbsp;Escape</strong> helps
            you find a place to eat, catch a movie, browse local shops, or get
            outside.
          </p>
        </div>
      </section>

      <section className={styles.bridge}>
        <h2 className={styles.bridgeTitle}>
          Find your kind of escape below{" "}
          <span className={styles.arrow}>&darr;</span>
        </h2>
        <p className={styles.bridgeText}>
          Dinner with friends, an afternoon at a museum, a quiet shop crawl, or
          a walk somewhere green – start with what sounds good today.
        </p>
        <p className={styles.bridgeText}>
          Browse a category, open a place for hours and location details, then
          save what you like to My Weekend so Friday plans are already started.
        </p>
      </section>

      <section className={styles.categoryGrid} id="categories">
        <article className={styles.categoryRow}>
          <div className={styles.panelPhotoWrap}>
            <img
              className={styles.panelPhoto}
              src={restaurantPhoto}
              alt="Restaurant dining room"
            />
          </div>
          <div className={styles.panelContent}>
            <h3>Restaurants</h3>
            <p>
              Cozy cafés for a study break, quick bites between classes, or a
              sit-down dinner when you want the evening to feel like a plan.
              Gettysburg runs from local coffee counters to historic taverns.
              Filter by what you&apos;re in the mood for!
            </p>
            <Link className={styles.sectionButton} to="/restaurants">
              Explore restaurants
            </Link>
          </div>
        </article>

        <article className={`${styles.categoryRow} ${styles.categoryRowReverse}`}>
          <div className={styles.panelPhotoWrap}>
            <img
              className={styles.panelPhoto}
              src={museumPhoto}
              alt="Museum gallery"
            />
          </div>
          <div className={styles.panelContent}>
            <h3>Museums & Cinema</h3>
            <p>
              Spend a few hours with local history, a gallery stop, or a film
              when you need a break from screens of your own. Useful when the
              weather turns or you want something indoors that still feels like
              getting out.
            </p>
            <Link className={styles.sectionButton} to="/museum-cinema">
              Explore museums & cinema
            </Link>
          </div>
        </article>

        <article className={styles.categoryRow}>
          <div className={styles.panelPhotoWrap}>
            <img
              className={styles.panelPhoto}
              src={shopPhoto}
              alt="Gift and souvenir shop"
            />
          </div>
          <div className={styles.panelContent}>
            <h3>Gift & Souvenir Shops</h3>
            <p>
              Pick up something small for home, a classmate, or a visitor. Grab Books,
              local goods, and gifts without a long drive to a mall. Handy before
              Parents Weekend or when you need one thoughtful stop downtown.
            </p>
            <Link className={styles.sectionButton} to="/shops">
              Explore shops
            </Link>
          </div>
        </article>

        <article className={`${styles.categoryRow} ${styles.categoryRowReverse}`}>
          <div className={styles.panelPhotoWrap}>
            <img
              className={styles.panelPhoto}
              src={parkPhoto}
              alt="Park and outdoor space"
            />
          </div>
          <div className={styles.panelContent}>
            <h3>Parks & Playgrounds</h3>
            <p>
              Trade the usual loop for fresh air. Find paths, open green, and spots to
              sit with friends. Good for a reset between study blocks or a
              low-key Saturday that doesn't need a reservation.
            </p>
            <Link className={styles.sectionButton} to="/parks">
              Explore parks
            </Link>
          </div>
        </article>
      </section>

      <section className={styles.closing}>
        <h2>Make a plan for your weekend</h2>
        <p>
          Found a few places that sound good? Save them to My Weekend as you
          browse. When Friday hits, open your list instead of starting from
          scratch—hours, ideas, and next stops in one place.
        </p>
        <Link className={styles.ctaDark} to="/weekend-plan">
          View My Weekend
        </Link>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <h2>Why CampusEscape</h2>
          <p>
            Gettysburg's history is a big part of what makes it special. {" "}
            <strong className={styles.emphasis}>Campus Escape</strong> focuses on the everyday escapes around town: places to
            eat, watch something, shop local, and get outside. It is aimed especially at
            students who want off-campus options without endless tab-hopping.
          </p>
          <p>
            <strong className={styles.emphasis}>Campus Escape</strong> describes the area as offering shops,
            restaurants, galleries, coffee shops, and outdoor activities
            alongside its historic sites. We gather those kinds of stops so you
            can compare, save, and just go!
          </p>
        </div>
      </section>
    </div>
  );
}
