export default function App() {

  const workers = [
    {
      name: "Carlos Henrique",
      job: "Técnico em Informática",
      desc: "Manutenção, limpeza e formatação de computadores."
    },
    {
      name: "Marcos Silva",
      job: "Eletricista",
      desc: "Instalações e reparos residenciais."
    },
    {
      name: "Ana Paula",
      job: "Designer Freelancer",
      desc: "Artes para redes sociais e identidade visual."
    }
  ]

  return (
    <div style={styles.page}>

      {/* HEADER */}

      <header style={styles.header}>

        <h1 style={styles.logo}>
          WorkConnect
        </h1>

        <nav style={styles.nav}>
          <a href="#" style={styles.link}>Início</a>
          <a href="#" style={styles.link}>Serviços</a>
          <a href="#" style={styles.link}>Profissionais</a>
          <a href="#" style={styles.link}>Contato</a>
        </nav>

      </header>

      {/* HERO */}

      <section style={styles.hero}>

        <div style={styles.heroText}>

          <h2 style={styles.title}>
            Conectando trabalhadores autônomos a novos serviços
          </h2>

          <p style={styles.subtitle}>
            Encontre profissionais para serviços rápidos, manutenção,
            tecnologia, design, construção e muito mais.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primaryBtn}>
              Procurar Serviço
            </button>

            <button style={styles.secondaryBtn}>
              Trabalhar na Plataforma
            </button>
          </div>

        </div>

        <div style={styles.heroCard}>

          <h3 style={styles.cardTitle}>
            Serviços em alta
          </h3>

          <div style={styles.serviceItem}>
            🔧 Manutenção de Computadores
          </div>

          <div style={styles.serviceItem}>
            ⚡ Serviços Elétricos
          </div>

          <div style={styles.serviceItem}>
            🚚 Fretes e Entregas
          </div>

          <div style={styles.serviceItem}>
            🎨 Design e Marketing
          </div>

        </div>

      </section>

      {/* CATEGORIAS */}

      <section style={styles.categories}>

        <h2 style={styles.sectionTitle}>
          Categorias
        </h2>

        <div style={styles.grid}>

          {
            [
              "Tecnologia",
              "Construção",
              "Design",
              "Fretes",
              "Limpeza",
              "Suporte Técnico",
              "Montagem",
              "Marketing"
            ].map((item,index)=>(
              <div key={index} style={styles.categoryCard}>
                {item}
              </div>
            ))
          }

        </div>

      </section>

      {/* PROFISSIONAIS */}

      <section style={styles.workersSection}>

        <h2 style={styles.sectionTitle}>
          Profissionais Disponíveis
        </h2>

        <div style={styles.workersGrid}>

          {
            workers.map((worker,index)=>(
              <div key={index} style={styles.workerCard}>

                <div style={styles.avatar}>
                  {worker.name[0]}
                </div>

                <h3>
                  {worker.name}
                </h3>

                <strong style={styles.job}>
                  {worker.job}
                </strong>

                <p style={styles.desc}>
                  {worker.desc}
                </p>

                <button style={styles.contactBtn}>
                  Entrar em Contato
                </button>

              </div>
            ))
          }

        </div>

      </section>

      {/* FOOTER */}

      <footer style={styles.footer}>

        © 2026 WorkConnect — Plataforma de trabalhadores autônomos.

      </footer>

    </div>
  )
}

const styles = {

  page:{
    background:"#f4fff7",
    minHeight:"100vh",
    fontFamily:"Arial",
    color:"#1f2937"
  },

  header:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"25px 8%",
    background:"white",
    boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
  },

  logo:{
    color:"#16a34a",
    fontSize:"32px"
  },

  nav:{
    display:"flex",
    gap:"20px"
  },

  link:{
    textDecoration:"none",
    color:"#1f2937",
    fontWeight:"bold"
  },

  hero:{
    padding:"80px 8%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"wrap",
    gap:"40px"
  },

  heroText:{
    flex:"1",
    minWidth:"300px"
  },

  title:{
    fontSize:"58px",
    lineHeight:"1.1",
    marginBottom:"25px",
    color:"#14532d"
  },

  subtitle:{
    fontSize:"18px",
    lineHeight:"1.7",
    maxWidth:"650px",
    marginBottom:"35px",
    color:"#4b5563"
  },

  buttons:{
    display:"flex",
    gap:"15px",
    flexWrap:"wrap"
  },

  primaryBtn:{
    background:"#16a34a",
    color:"white",
    border:"none",
    padding:"16px 24px",
    borderRadius:"12px",
    fontSize:"16px",
    fontWeight:"bold",
    cursor:"pointer"
  },

  secondaryBtn:{
    background:"white",
    color:"#16a34a",
    border:"2px solid #16a34a",
    padding:"16px 24px",
    borderRadius:"12px",
    fontSize:"16px",
    fontWeight:"bold",
    cursor:"pointer"
  },

  heroCard:{
    background:"white",
    padding:"30px",
    borderRadius:"20px",
    width:"340px",
    boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
  },

  cardTitle:{
    marginBottom:"20px",
    color:"#14532d"
  },

  serviceItem:{
    background:"#dcfce7",
    padding:"15px",
    borderRadius:"12px",
    marginBottom:"12px",
    fontWeight:"bold"
  },

  categories:{
    padding:"20px 8% 70px"
  },

  sectionTitle:{
    fontSize:"38px",
    marginBottom:"35px",
    color:"#14532d"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"20px"
  },

  categoryCard:{
    background:"white",
    padding:"28px",
    borderRadius:"16px",
    textAlign:"center",
    fontWeight:"bold",
    boxShadow:"0 5px 20px rgba(0,0,0,0.05)"
  },

  workersSection:{
    padding:"20px 8% 90px"
  },

  workersGrid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
    gap:"25px"
  },

  workerCard:{
    background:"white",
    padding:"30px",
    borderRadius:"20px",
    boxShadow:"0 10px 25px rgba(0,0,0,0.06)"
  },

  avatar:{
    width:"70px",
    height:"70px",
    borderRadius:"50%",
    background:"#16a34a",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"28px",
    fontWeight:"bold",
    marginBottom:"20px"
  },

  job:{
    display:"block",
    color:"#16a34a",
    margin:"10px 0"
  },

  desc:{
    color:"#4b5563",
    lineHeight:"1.6",
    marginBottom:"20px"
  },

  contactBtn:{
    background:"#16a34a",
    color:"white",
    border:"none",
    padding:"14px 18px",
    borderRadius:"10px",
    cursor:"pointer",
    fontWeight:"bold",
    width:"100%"
  },

  footer:{
    background:"#14532d",
    color:"white",
    textAlign:"center",
    padding:"30px"
  }

}