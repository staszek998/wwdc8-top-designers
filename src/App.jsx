/**
 * @file This is the main file of the web app. It is used to import and control the inner components.
 *
 * @author Stanisław Gregor <gregor.stanislaw@hotmail.com>
 */

// JS imports
import React, { Component } from "react";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Circles from "./sections/Circles/Circles";
import OurTeam from "./sections/OurTeam/OurTeam";
import Portfolio from "./sections/Portfolio/Portfolio";
import Brands from "./sections/Brands/Brands";
import Footer from "./sections/Footer/Footer";

// SCSS imports
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
        deleniti quo quibusdam pariatur a optio tempore assumenda sed, ea fuga
        quis eum nisi. Odit, qui recusandae esse molestias ipsum quam? Ipsa
        explicabo, iusto ipsum nisi quam dolores facere. Asperiores ullam
        consectetur illum eligendi dolorem culpa, tempora nisi cumque. Quos
        autem, quisquam excepturi asperiores quas adipisci quam cum provident
        alias id. Nesciunt odio praesentium eaque perspiciatis numquam dolore
        nostrum similique debitis, dicta saepe nobis dolorem eligendi iusto
        esse, fugiat voluptatem, quibusdam unde tempore id soluta provident cum
        tenetur accusantium? Perferendis, rerum! Officiis velit laborum ex
        harum. Animi, placeat officia! At, recusandae repellendus. Esse, odio
        ab? Nemo et id quam dicta dolore suscipit eum totam tempore labore. Aut
        porro explicabo eaque blanditiis. Ea, ut exercitationem magnam
        veritatis, laboriosam quidem obcaecati corporis enim laborum rem ducimus
        consequuntur. Magni animi veniam doloribus, illo reprehenderit eveniet
        velit atque exercitationem voluptatem, unde officiis, possimus ea nobis.
        Aliquam eos hic adipisci ut praesentium, illum rem reprehenderit placeat
        quidem culpa explicabo temporibus quisquam neque? Aliquid, fugiat
        delectus! Impedit inventore cum ratione ducimus sunt! Ullam dolores
        molestiae blanditiis iste? Iusto esse repellat quidem doloremque magnam
        reprehenderit nihil iure vel! Iusto, dignissimos quae sint vel veritatis
        pariatur quasi, nobis enim suscipit excepturi odio et repellendus qui
        maxime magnam eveniet tempore? Tempore accusantium esse sint, doloribus
        laboriosam perspiciatis. Maxime molestias, deleniti pariatur nulla saepe
        repellat dolores veniam culpa voluptate illum. Harum veritatis non
        maxime ducimus. Aspernatur impedit odit optio obcaecati necessitatibus.
        Tempora, quisquam quam sapiente, eaque voluptatum recusandae placeat
        temporibus saepe velit, omnis possimus corrupti dolorum praesentium.
        Amet, labore iure earum, similique ab quo dolores culpa totam eligendi
        consectetur tempora inventore. Laborum labore voluptatibus possimus
        error voluptatum. Perferendis neque laudantium numquam velit, accusamus
        iste. Atque porro, eligendi tempore molestiae sed non, iusto dolor
        excepturi expedita, soluta nostrum sit doloribus in ea.
        <Hero />
        <main>
          <Circles />
          <OurTeam />
          <Portfolio />
          <Brands />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
