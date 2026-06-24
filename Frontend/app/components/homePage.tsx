export default function HomePage() {
  return (
    <main className = "flex flex-col bg-[#262626] px-20 py-5 space-y-5">
      <img src = "/logos/CHAMELEON_LOGO_COLOUR.svg" height={100} width={300} />
      <div className = "flex flex-col space-y-5 text-section text-white">
        <p>
          Chameleon Dancewear and Costume Hire has been a staple of the Kettering town centre for over two decades. It was the go to shop for fancy dress hire and dance schools, with students getting their dancewear from there for many years. The business was sold in 2019 when the previous owner decided that, due to the pressures of the internet and adjusting consumer trends, it was time to close the business.
        </p>
        <p>
          As a regular customer of the fancy dress shop, Starlight approached the landlord and resurrected the business with a twist. As the business restarted, Covid shortly hit which forced a further closure. When the businesses reopened, the party store industry had changed. Fewer parties taking place and immediate costumes available online the fancy dress hire business was no more.
        </p>
        <p>
          Out of the ashes of the fancy dress hire business and utilising the extensive range of costumes that Starlight Dance & Musical Theatre School built up over the years, Chameleon Dancewear and Costume Hire changed direction to become a primarily trade hire company, hiring directly to dance schools up and down the country.
        </p>
        <p>
          Focusing on costume hire initially, the new Chameleon soon expanded to offer a range of services including prop and set hire, technical equipment and audio and visual services such as music editing and filming shows.
        </p>
        <p>
          In 2024 Chameleon moved to its new larger premises in Kettering and look to develop a larger and wider selection of costumes and services to offer its customers, as well as creating an innovative approach to dance school show hire with its show room and meeting facilities.
        </p>
      </div>
      <header className = "text-white font-bold text-2xl">
        Our services
      </header>
      <div className = "flex flex-row justify-center space-x-5" id = "Service links">
        <a href = "https://www.starlightdance.net/chameleon" target="_blank" rel="noopener noreferrer">
          <img src = "icons/costumeHire.svg" className = "h-52.5 w-87.5" />
        </a>
        <a href = "https://www.starlightdance.net" target="_blank" rel="noopener noreferrer">
          <img src = "icons/propHire.svg" className = "h-52.5 w-87.5" />
        </a>  
      </div>
    </main>
  );
}
