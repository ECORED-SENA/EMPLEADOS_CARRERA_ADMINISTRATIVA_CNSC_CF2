<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Aspectos generales del Sistema Tipo de Evaluación de la CNSC.
    .row.mb-5 
      .col-lg-6 
        p El Sistema de Evaluación Tipo de la Comisión Nacional del Servicio Civil (CNSC), reglamentado por el Acuerdo 6176 de 2018, establece los elementos para la evaluación de desempeño laboral de los servidores de carrera administrativa y en periodo de prueba, mediante la aplicación de diferentes fases y con la participación de diversos actores. Este sistema debe ser adoptado por las entidades del Estado que aún no cuenten con sistemas propios.
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
    #t_1_1.titulo-segundo
      .h2 1.1  Definición
    p.mb-5 La Evaluación del Desempeño Laboral es un procedimiento para medir el avance, cumplimiento o incumplimiento de los compromisos laborales del empleado que ocupa un puesto de trabajo, dichos compromisos contribuyen al logro de las metas institucionales.
    .bloque-texto-a.bloque-imagen.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-5
            .h3 Entendemos el desempeño como aquello que realiza o debe realizar el servidor de carrera administrativa o en periodo de prueba, en las actividades propias del empleo, para el logro de los objetivos institucionales.
    #t_1_2.titulo-segundo
      .h2 1.2. Finalidad
    p.mb-5 La finalidad de la Evaluación del Desempeño, del Sistema Tipo de la CNSC, se encuentra definida en el Artículo 1 del Acuerdo 617 de 2018 de la siguiente forma: 
    .bloque-texto-a.color-primario.bloque--griss.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.p-5
          .h3 Artículo 1°. Finalidad de la Evaluación del Desempeño
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p Es una herramienta de gestión objetiva y permanente, encaminada a valorar las contribuciones individuales y el comportamiento del evaluado, midiendo el impacto positivo o negativo en el logro de las metas institucionales. Esta evaluación de tipo individual permite así mismo, medir el desempeño institucional.
    #t_1_3.titulo-segundo
      .h2 1.3 Actores del proceso de evaluación del desempeño
    p.mb-5 La finalidad de la Evaluación del Desempeño, del Sistema Tipo de la CNSC, se encuentra definida en el Artículo 1 del Acuerdo 617 de 2018 de la siguiente forma: 
    .tarjetas-cyan.d-flex.p-2.mb-5
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto 
          b Comisión Nacional <br> del Servicio Civil
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto 
          b Jefe de la entidad
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto 
          b Jefe de la oficina de planeación o quien haga a sus veces
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto 
          b Jefe de la oficina de control interno o quien haga sus veces
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto  
          b Jefe de la unidad de personal o quien haga sus veces
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto  
          b Evaluados y evaluadores
      .card-cyan.align-items-center.d-flex.p-3.m-1.mb-3
        img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen' style='width:84px').d-inline-block
        p.d-inline-block.ps-3.my-auto  
          b Comisión de personal
    p.mb-5 A continuación, las obligaciones de los actores del proceso de EDL, definidas en el anexo técnico del Acuerdo 6176 de 2018:Z
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Comisión Nacional del Servicio Civil" :icono="require('@/assets/curso/img10.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Comisión Nacional del Servicio Civil
            p “Socializar el Sistema Tipo de Evaluación del Desempeño Laboral a través de los medios de divulgación que considere pertinentes” (Anexo técnico del acuerdo 6176 de 2018).
          .col-md-6
            figure
              img(src='@/assets/curso/img17.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Jefe de la entidad" :icono="require('@/assets/curso/img11.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Jefe de la entidad
            p 
              b “Desarrollar su propio Sistema de Evaluación del Desempeño Laboral y en el entretanto adoptar el Sistema Tipo de Evaluación del Desempeño Laboral establecido por la CNSC” 
              b-none (Anexo técnico del acuerdo 6176 de 2018).
          .col-md-6
            figure
              img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Jefe de la oficina de planeación" :icono="require('@/assets/curso/img12.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Jefe de la oficina de planeación 
            p Publicar a más tardar el treinta y un (31) de enero de cada año, las metas por áreas o dependencias de cada vigencia. (Ley 1474 de 2011, Artículo 74).
              br
              br
              |Publicar los avances logrados por las áreas o dependencias en la ejecución de sus metas de la vigencia inmediatamente anterior conforme lo determina la ley. 
          .col-md-6
            figure
              img(src='@/assets/curso/img19.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Jefe de la oficina  de control interno" :icono="require('@/assets/curso/img13.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Jefe de la oficina  de control interno
            p Dar a conocer a los evaluadores el resultado de la evaluación de gestión por áreas o dependencias del año inmediatamente anterior, para que se tenga como uno de los criterios en la concertación de los compromisos del siguiente periodo de evaluación.
          .col-md-6
            figure
              img(src='@/assets/curso/img20.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Jefe de la unidad de personal" :icono="require('@/assets/curso/img14.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Jefe de la unidad de personal
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Poner en funcionamiento el Sistema de Evaluación del Desempeño al interior de la entidad, bien sea el sistema propio o excepcionalmente el sistema tipo diseñado por la CNSC.  
              li 
                i.fas.fa-check
                | Divulgar las disposiciones legales y reglamentarias relacionadas con la Evaluación del Desempeño Laboral. 
              li 
                i.fas.fa-check
                | Diseñar y administrar el programa de capacitación en materia de Evaluación del Desempeño Laboral.
              li 
                i.fas.fa-check
                | Tener en cuenta los resultados de la Evaluación del Desempeño Laboral, para establecer los planes de: estímulos, capacitación y bienestar de la entidad.
              li 
                i.fas.fa-check
                | Conformar las comisiones evaluadoras, cuando haya lugar a ello, para el período de evaluación correspondiente.
          .col-md-6
            figure
              img(src='@/assets/curso/img21.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Evaluados y evaluadores" :icono="require('@/assets/curso/img15.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Evaluados y evaluadores
            p Las obligaciones indicadas en el anexo técnico del Acuerdo 6176 de 2018, para evaluados y evaluadores, son las de participar de manera activa en las diferentes fases que integran el proceso de Evaluación del Desempeño Laboral: concertación de compromisos y sus seguimientos, acordar compromisos de mejoramiento individual cuando sea necesario, presentar las evidencias que se generen durante el período de evaluación. Al evaluador le corresponde diligenciar los instrumentos de evaluación del desempeño laboral.
          .col-md-6
            figure
              img(src='@/assets/curso/img22.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Comisión de personal" :icono="require('@/assets/curso/img16.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h3 Comisión de personal
            p 
              b “Resolver en única instancia, las reclamaciones que formulen los evaluados inconformes con los compromisos. (Ley 909 de 2004, Artículo 16)”.
          .col-md-6
            figure
              img(src='@/assets/curso/img23.jpg', alt='Texto que describa la imagen')
    #t_1_4.titulo-segundo
      .h2 1.4. Comisión evaluadora
    p.mb-5 Las comisiones evaluadoras son responsables de llevar a efecto la evaluación del desempeño laboral de los empleados de carrera administrativa y empleados en periodo de prueba. 
      br
      br
      |En el anexo técnico del Acuerdo 6176/18 se define que, si el jefe inmediato del evaluado es de carrera, con nombramiento en provisionalidad, o se encuentra en período de prueba; el jefe de talento humano o quien haga sus veces deberá conformar la comisión evaluadora desde el inicio del proceso de Evaluación del Desempeño Laboral. Esta comisión estará integrada por el jefe inmediato del evaluado y un servidor de libre nombramiento y remoción y actuará desde la concertación de compromisos laborales hasta que la calificación se encuentre en firme. 
      br
      br
      |El empleado de libre nombramiento y remoción de la comisión evaluadora tiene la responsabilidad de evaluar, si el empleado de carrera, provisional o en período de prueba, pierde la calidad de jefe inmediato.
    #t_1_5.titulo-segundo
      .h2 1.5 Impedimentos y recusaciones de los responsables del proceso de evaluación.
    p.mb-5 En el artículo 18, del Acuerdo 617 de 2018, se indica
    .bloque-texto-b.color-secundario.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          span.mb-2 
            p  “Los impedimentos y recusaciones se tramitarán y decidirán en los términos previstos en el artículo 38 y siguientes del Decreto Ley 760 de 2005 y en lo no previsto, se aplicará el Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA - o las disposiciones que lo modifiquen, aclaren o sustituyan”.
          i.fas.fa-quote-right
          p.text-end
            b -  Artículo 18,  Acuerdo 617 de 2018
    p.mb-5 En cuanto a los impedimentos y recusaciones, el Artículo 38 del Decreto Ley, establece:
    .bloque-texto-b.color-secundario.p-4
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          span.mb-2 
            p  “los responsables de evaluar el desempeño laboral de los empleados de carrera o en período de prueba deberán declararse impedidos cuando se encuentren vinculados con estos por matrimonio o por unión permanente o tengan parentesco hasta el cuarto grado de consanguinidad, segundo de afinidad, primero civil o exista enemistad grave con el empleado a evaluar o cuando exista cualquier causal de impedimento o hecho que afecte su objetividad”.
          i.fas.fa-quote-right
          p.text-end
            b -  Artículo 38 del Decreto Ley
    #t_1_6.titulo-segundo
      .h2 1.6 Instrumentos de evaluación
    p.mb-5 La Comisión Nacional del Servicio Civil (CNSC) ha dispuesto el aplicativo EDL APP, como instrumento para llevar a cabo el proceso evaluación del desempeño laboral en las entidades públicas que aún no cuentan con sistemas propios aprobados por la Comisión. 
    .row.mb-5 
      .col-lg-6
        a.anexo.mb-4.mb-lg-0(href="https://www.cnsc.gov.co/index.php/sistema-general-de-carrera/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Estimado aprendiz, para el uso del aplicativo, se puede utilizar la siguiente ruta: 
                b carrera/sistema general de carrera/ tutoriales EDL APP en la página de la Comisión Nacional del Servicio CIvil (CNSC).
    #t_1_7.titulo-segundo
      .h2 1.7 Evaluación del teletrabajador
    .row.mb-5 
      .col-lg-6
        p Las nuevas tecnologías de la información y la comunicación permiten realizar el trabajo en un lugar diferente, a las instalaciones de la entidad; lo que se denomina teletrabajo. 
          br
          br
          |En ese sentido, y de conformidad con lo establecido en la Ley 1221/18 y el Decreto 1072/15, los servidores de carrera administrativa y en período de prueba que desempeñan actividades laborales por fuera de la empresa a la que presta sus servicios, mediante la utilización de tecnologías de la información y las telecomunicaciones (TIC), serán evaluados con base en los parámetros establecidos por la CNSC en el Acuerdo 6176 de 2018, su anexo técnico y los instrumentos de evaluación. (Artículo 19°. Evaluación del teletrabajador).
      .col-lg-6
        figure
          img(src='@/assets/curso/img24.jpg', alt='Texto que describa la imagen')
    #t_1_8.titulo-segundo
      .h2 1.8 Evaluación de servidores administrativos del sector educativo
    p.mb-5 Con respecto a la evaluación de los servidores administrativos del sector educativo, el Acuerdo 6176 de 2018 en el artículo 20, establece que los compromisos serán concertados entre el rector o director rural y el servidor evaluado. Al secretario de educación o quien haga sus veces, le corresponde fijar uno de los compromisos para todos los servidores públicos que hacen parte de la planta administrativa de las instituciones educativas. Al final del periodo de evaluación, el rector o director rural, según el caso, evaluará los compromisos.
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
