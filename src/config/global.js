export default {
  global: {
    componenteFormativo:
      'Aspectos generales del Sistema Tipo de Evaluación de la CNSC.',
    descripcionCurso:
      'El Sistema de Evaluación Tipo de la CNSC es una gran herramienta de gestión para las entidades públicas, que permite evidenciar la contribución de cada servidor al logro de las metas institucionales.  Durante la totalidad del periodo de evaluación se realiza seguimiento donde se identifican las competencias que se deben fortalecer para la generación de un mejor servicio que responda a las necesidades y expectativas de la ciudadanía y lograr así construir un mejor sector público que impacte en el desarrollo de las personas, la entidad y el país.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aspectos generales del Sistema Tipo de Evaluación de la CNSC.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Finalidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actores del proceso de evaluación del desempeño',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comisión evaluadora',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Impedimentos y recusaciones de los responsables del proceso de evaluación.',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Instrumentos de evaluación',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Evaluación del teletrabajador',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              'Evaluación de servidores administrativos del sector educativo',
            hash: 't_1_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Fanny Restrepo Morales',
        cargo: 'Instructora Experta temática',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Risaralda',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de diseño y metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión industrial',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Yuly Rey'],
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey ',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acuerdo 6176 de 2018. [CNSC]. Por el cual se establece el Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. Octubre 10 de 2018',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90685',
    },
    {
      referencia:
        'CNC (2018). Anexo Técnico del Sistema Tipo de Evaluación del Desempeño Laboral de los Empleados Públicos de Carrera Administrativa y en Período de Prueba. ',
      link:
        'https://www.cnsc.gov.co/index.php/normatividad/acuerdos?download=22814:anexo-20181000006176',
    },
    {
      referencia:
        'Constitución Política de Colombia. [Const]. Capítulo 2: De la Función pública Art. 122. 7 de julio de 1991 (Colombia).',
    },
    {
      referencia:
        'Constitución Política de Colombia. [Const]. Capítulo 2: De la Función pública Art. 123. 7 de julio de 1991 (Colombia).',
    },
    {
      referencia:
        'Constitución Política de Colombia. [Const]. Capítulo 2: De la Función pública Art. 125. 7 de julio de 1991 (Colombia). ',
    },
    {
      referencia:
        'Constitución Política de Colombia. [Const]. Capítulo 2: De la Función pública Art. 130. 7 de julio de 1991 (Colombia).',
    },
    {
      referencia:
        'Decreto 1227 de 2005 [Departamento Administrativo de la Función Pública] Por el cual se reglamenta parcialmente la Ley 909 de 2004 y el Decreto Ley 1567 de 1998. Abril 25 de 2005. D.O. 45890.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16313',
    },
    {
      referencia:
        'Decreto Ley 760 de 2005. [Departamento Administrativo de la Función Pública].  Por el cual se establece el procedimiento que debe surtirse ante y por la Comisión Nacional del Servicio Civil para el cumplimiento de sus funciones. Marzo 17 de 2005. D.O. 45855.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16124',
    },
    {
      referencia:
        'Decreto 1083 de 2015. [Función Pública]  Por medio del cual se expide el Decreto Único Reglamentario del Sector de Función Pública.   Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=62866',
    },
    {
      referencia:
        'Decreto 815 de 2018. [Departamento administrativo de la Función Pública] Por el cual se modifica el Decreto 1 083 de 2015, Único Reglamentario del Sector de Función Pública, en lo relacionado con las competencias laborales generales para los empleos públicos de los distintos niveles jerárquicos. Mayo 8 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=86304',
    },
    {
      referencia:
        'Ley 909 de 2004. Por la cual se expiden normas que regulan el empleo público, la carrera administrativa, gerencia pública y se dictan otras disposiciones. Septiembre 23 de 2004.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0909_2004.html',
    },
    {
      referencia:
        'Restrepo, F. (2020). Sistema tipo de evaluación de la CNSC. Fanny, Restrepo, Curso para evaluadores del desempeño laboral con el sistema tipo de la Comisión Nacional del Servicio Civil. Material de formación. Sena.',
    },
  ],
  glosario: [
    {
      termino: 'Calificación',
      significado:
        'La calificación corresponde a la asignación del porcentaje alcanzado por el evaluado, conforme a las evidencias que dan cuenta de su desempeño y comportamiento. ',
    },
    {
      termino: 'Carrera administrativa',
      significado:
        'Sistema que regula el ingreso, permanencia, ascenso y retiro del personal, regulado por la función pública y la Comisión Nacional del Servicio Civil.',
    },
    {
      termino: 'Competencias',
      significado:
        'Es la capacidad de una persona para desempeñar, en diferentes contextos y con base en los requerimientos de calidad y resultados esperados en el sector público, las funciones inherentes a un empleo; capacidad que está determinada por los conocimientos, destrezas, habilidades, valores, actitudes y aptitudes que debe poseer y demostrar el empleado. (ESAP-DAFP – Guía para la formulación del PIC).',
    },
    {
      termino: 'Comportamental',
      significado:
        'El término comportamental hace referencia a la actitud o conducta natural  que muestra una persona  en diferentes situaciones y lugares.',
    },
    {
      termino: 'Compromisos laborales',
      significado:
        'Son aquellos que evidencian las competencias funcionales del empleo y las competencias comportamentales que debe acreditar todo servidor público en el ejercicio del empleo.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Conductas laborales del empleado en el cumplimiento de sus funciones. El desempeño se considera también como el desarrollo de los compromisos en relación a las metas deseadas por la entidad. ',
    },
    {
      termino: 'Empleo público',
      significado:
        'Es el conjunto de funciones, tareas y responsabilidades que se asignan a una persona y las competencias requeridas para llevarlas a cabo, con el propósito de satisfacer el cumplimiento de los planes de desarrollo y los fines del estado. (Artículo 19 Ley 909 de 2004).',
    },
    {
      termino: 'Evaluación',
      significado:
        'La evaluación consiste en estimar de forma permanente los conocimientos, destrezas, actitudes, habilidades, aptitudes y rendimiento de los evaluados durante el período respectivo.',
    },
    {
      termino: 'Evaluado',
      significado:
        'Empleado de carrera o en período de prueba que presta sus servicios en una entidad cuyo sistema de carrera administrativa se encuentre administrado y vigilado por la CNSC.',
    },
    {
      termino: 'Evaluador',
      significado:
        'Es el jefe inmediato del servidor de carrera o en período de prueba, responsable de evaluar su desempeño, quien deberá ostentar un grado igual o superior al evaluado. ',
    },
    {
      termino: 'Evidencias',
      significado:
        'Son los elementos que permiten establecer de manera objetiva equitativa y transparente el avance, cumplimiento o, incumplimiento de los compromisos que se han generado durante el período de evaluación.',
    },
    {
      termino: 'Función pública',
      significado:
        'Aquella que está al servicio de los intereses generales y prestación de servicios a cargo del Estado, a través de sus servidores, y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad (artículo 209 Constitución Política y 2° Ley 909 de 2004).',
    },
    {
      termino: 'Metas institucionales',
      significado:
        'Para los fines de la evaluación del desempeño, las metas institucionales son las establecidas por la alta dirección de la entidad, de conformidad con los planes, programas, proyectos, o planes operativos anuales por área o dependencia, encaminada al cumplimiento de los objetivos y propósitos de la entidad.',
    },
    {
      termino: 'Periodo de prueba en empleo de carrera',
      significado:
        'El empleado con derechos de carrera administrativa que supere un concurso para un empleo de carrera será nombrado en período de prueba y su empleo se declarará vacante temporal mientras dura el período de prueba.',
    },
    {
      termino: 'Teletrabajo',
      significado:
        'En Colombia, el teletrabajo se encuentra definido en la Ley 1221 de 2008 como:"Una forma de organización laboral, que consiste en el desempeño de actividades remuneradas o prestación de servicios a terceros utilizando como soporte las Tecnologías de la Información y Comunicación -TIC- para el contacto entre el trabajador y la empresa, sin requerirse la presencia física del trabajador en un sitio específico de trabajo". (Artículo 2, Ley 1221 de 2008)',
    },
    {
      termino: 'Teletrabajador',
      significado:
        'El teletrabajador es el empleado que utiliza las tecnologías de la información y comunicación para la realización de las funciones u obligaciones de su empleo.',
    },
  ],
  complementario: [
    {
      texto: 'Aspectos generales del sistema tipo de evaluación de la CNSC.”',
      tipo: 'PDF',
      descarga:
        'downloads/Acuerdo_6176_de_2018_Comisión_Nacional_del_Servicio_Civil.pdf',
    },
    {
      texto:
        'Anexo técnico del sistema tipo de evaluación del desempeño laboral de los empleados publicos de carrera administrativa y en periódo de prueba.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo 20181000006176.pdf',
    },
  ],
}
