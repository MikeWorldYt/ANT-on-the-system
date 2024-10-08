export const content: Record<string, any> = {
	EN: {
    title_01: {
			// header : {
			// 		h3: 'Introduction',
			// 		h1: 'What is ANT?',
			// 		c1: "ANT on the system (Archive Nesting Technique on the System) is a hierarchical organizational method designed to streamline the storage, easier to manage and find files.",
			// },
      page_01: {
				article_01: {
					_id: 'Intro',
					h1: 'What is ANT?',
					c1: {
						t: "quote",
						c_1: "<strong>ANT system</strong> (Archive Nesting Technique System) <br> is a <i>organizational methods system</i> designed to streamline the storage, project management and file retrieval.",
					},
					p1: "This system originated in a Workplace environment <strong>to Manage a Large Volume of files</strong> and was <strong>re-adapted for Home Use</strong>, maaking it easy for any user to implement. <br> Even so, we highlight that it's <strong><i>mainly focused on the Home Offices and Students</i></strong>, but it still offers flexibility for other areas.",
					p2: "<br>This system has organizational methods is infrastructured in a way that mimics an ant colony; Technically, it works as a herarchical structure with a Directed Acyclic Graph (DAG) adapted to the conventional Tree Data Structure, Also it creates a decentralized and modular infrastructure, making it both flexible and resilient in handling information.",
					p3: "<br>The purpose of this system and its methods is to ensure that even when managing a large amount and variety of data, It can be organized and dynamically managed.",
					hidden_p4: "In other words, As long as the user follows these methods, when they create or add a new file to their system, they'll be free to edit, share, migrate, version, etc., with a very high probability that their information will not be compromised, duplicated, or lost among other files."
				},
				article_02: {
					_id: 'How does ANT work',
					h1: 'How does ANT work?',
					p1: "This system combines a set of rules and categorization processes that allow it, as the name suggests, to <i>categorize</i> by dividing and organizing all the information that enters or is created within it, in a logical and flexible way.",
					p2: "<br>These processes organize files into levels and categories, and they also employ a naming convention to ensure ease of search and identification. This, in turn, helps the indexing engine find files with greater precision and speed, making them easier to locate through the search function.",
					p3: "<br>It is important to note that these categorization processes were inspired by systems like the DDC and UDC, and it was designed at the request of a private institution, where it underwent testing during its development, continuously provided feedback from users helped it adapt and improve throughout the process.",
				},
				article_03: {
					_id: 'Adapts to Different Users',
					h1: 'How ANT Adapts to Different Users?',
					p1: "While initially designed for institutional use, the ANT system is flexible enough to be tailored for various user profiles, such as Students, Freelancers, Home Offices, and others.",
					p2: "<br>",
					ul1: {
						li_0: "<strong>For Students:</strong> Allows easy management of coursework, research, and project files, with the ability to track versions and group files by subjects or semesters.",
						li_1: "<strong>For Home Offices:</strong> Managing work-related files becomes more straightforward with a dedicated structure for ongoing and completed projects, invoices, and reference materials.",
						li_2: "<strong>For Personal Use:</strong> ANT helps users maintain a clutter-free digital space, offering a methodical approach to organizing photos, Personal Documents, and Hobbies.",
						p3: "Although it is multipurpose, you can have more than one of these profiles and use the system in the same Root Storage."
					}
				},
				article_04: {
					_id: 'Key benefits',
					h1: 'Key Benefits of ANT System:',
					ul1: {
						li_0: "<strong>1. Structured Organization:</strong>  Files are organized in a clear hierarchical structure, making navigation easy.",
						li_1: "<strong>2. Convenient Nomenclature:</strong>  Folders and subfolders are named with an incremental and intuitive patern, improving the organization, creation, and search of content.",
						li_2: "<strong>3.Clean Desktop:</strong>  A special 'Projects' folder serves as a Temporary Repository for current and future projects, eliminating the need to use the desktop for these purposes and keeping clutter-free.",
						li_3: "<strong>4.Master Tracking Work/School Projects:</strong>   It allows you track ongoing projects and store ideas, When a project is done you\'ll know it, If you need files from another project you\'ll know where they are."
					},
					p1: ''
				}
      },
    },
    title_02: {
			// header: {
			// 	h3: '',
			// 	h1: ''
			// },
      page_01: {
				article_10: {
					_id: 'Structure & Infrastructure',
					h1: '1. Structure & Infrastructure',
					p1: "<strong>ANT has a hierarchical structure</strong> adapted to be immediately implemented in the conventional tree structure. <br> However, <strong>due to it's has a decentralized modular infrastructure</strong>, it follows a specific structural rules that ensures its proper functioning. <br> To understand this, we must first grasp the terms \"Levels\", \"Nodes\" and \"Modules\" within this system;",
					ul1: {
						li_0: "The term <strong>\"Levels\"</strong> refers to the depth of the folder in relation to her root folder",
					},
					c1: {
						t: 'success',
						c_1: "<strong>Tip</strong>: We suggests 3 levels, although in some cases there may be more. <br> However, try not to create more than 3, unless you think it's necessary.",
					},
					i1: {
						p_1: "https://i.pinimg.com/originals/d1/50/7f/d1507f192fcecd9bdce59a557bf468b7.png",
						p_2: "https://i.pinimg.com/originals/39/c3/d2/39c3d209134b6385ff52e63a21cf0b83.png",
					},
					ul2: {
						li_0: "The term <strong>\"Node\"</strong> refers to each of the folders.",
					},
					c2: {
						t: 'quote',
						c_1: "It's true, We could simply call them <i>folders</i>, but in this system, each folder acts as a Node,<br> Having one or more in/out degrees, being part of a module (group), and in some cases having a lifespan (existence).",
						a_1: [ 
							[" empty array "] ,
							[ // nested anchor
								"NESTED ANCHOR TESTING",
								"/test/EN/introduction/into", // "/advanced-concepts",
								"How-works", // "sharing"
								"not-available"]
						],
					},
					i2: {
						p_1: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2phNHR3aGlkZ281NDh6NHhmbDM2OThvc2MxZ3R6MDN2NmVwcTA0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPUFqtt4ydWj5rmPNM/giphy.gif",
					},
					ul3: {
						li_0: "Lastly, the term <strong>\"Module\"</strong> refers to a grouping of nodes in relation to their level, her <strong>category</strong>. This means that, regardless of their connections, the nodes maintain a hierarchical grouping within the Tree data structure.",
					},
					i3: {
						p_1: "empty",
					},
				},
				article_11: {
					_id: 'Level 1',
					h1: '1.1 The Level 1 - Main Categories', 
					p1: "Here are the first nodes (Folders) within your Root Storage; <br> The names is highly descriptive, as it specifies the category contained.",
          c1: {
            t: 'warning',
            c_1: "Each node only serve to assign and group the modules for the next level; <br> There should be no other files here just folders."
          },
          p2: "<br>The Storage nodes (folders) are named using the following convention:",
					ul1: {
						li_0: "Incremental numbering of 3 digits in a sequence of 100.",
						li_1: "A dot (as separator).",
						li_2: "Name in UPPERCASE (Capitals).",
					},
					c2: {
						t: 'danger',
						c_1: "<strong>Important</strong>: This is defined the first time and should remain that way. <br> Renaming it after some time may cause conflicts with programs that use absolute paths, requiring EVERYTHING to be relink again."
					},
					p3: "We recommend using the following category names, in the following order;",
					ul2: {
						li_0: "<strong>100.PERSONAL</strong>: For your personal files and documents.",
						li_1: "<strong>200.WORK</strong>: For work-related files.", 
						li_2: [ 
							["<strong>300.PROJECTS</strong>: "],
							[ // nested anchor 
								"Support Directory (optional order)",
								"/concepts/Support-Nodes",
								"Project-Folder",
								""
							]	],
						li_3: "<strong>400.ACADEMIC</strong>: For school or related files.",
						li_4: " <strong>500.HOBBIES</strong>: For files related to your leisure activities.", 
					},
					a1: "Read more about <i>Support Folder \"PROJETCS\"</i>",
					c3: {
						t: 'success',
						c_1: "Separating it into these contexts allows for maintaining and managing files separately, reducing the likelihood of mixing files, while also helping to keep a clear focus on their use and what is stored there."
					},
					p4: "Likewise, at the same level, we will have three additional Support Nodes:",
					ul3: {
						li_0: [ 
							["<strong>900.RESOURCES</strong>: Tools and Programs"],
							[ // nested anchor 
								"read more",
								"/concepts/Support-Nodes",
								"Resources-Folder",
								""
							]	],
						li_1: [ 
							["<strong>998.REVIEW</strong>: A directory of shortcuts to the Review Folder"],
							[ // nested anchor 
								"read more",
								"/concepts/Support-Nodes",
								"Review-Folder",
								""
							]	],
							li_2: [ 
								["<strong>999.SETTINGS</strong>:configurations for the ANT system, Programs and the Operating System"],
								[ // nested anchor 
									"read more",
									"/concepts/Support-Nodes",
									"Settings-Folder",
									""
								]	],
					},
					p5: "<br>It should look like this:",
					i2: {
						p_1: "https://i.pinimg.com/originals/2e/00/e0/2e00e04710e709dafda6acda28baac13.png",
					},
				},
				article_12: {
					_id: 'Level 2',
					h1: '1.2 The Levels 2 - Categories',
					p1: "These are located within a \"Level 1\" folder, their child nodes.<br> The name should describe a topic or subject related to its parent. Thus, being more specific, this would include things like Area, Topic, Subject, Organization, Type of work, or something related.",
          c1: {
            t: 'warning',
            c_1: "Each node only serve to assign and group the modules for the next level; <br> There should be no other files here just folders."
          },
          p2: "The Storage nodes (folders) are named using the following convention:",
          ul1: {
						li_0: "Incremental numbering of 2 digits (from 1 to 89).",
						li_1: "A dot (as separator).",
						li_2: "Name in PascalCase",
					},
					c2: {
						t: 'quote',
						c_1: "The order in the sequence is not essential and only facilitates a visual organization. <br> Although it may not represent a logical sequence, numbering makes it <i>more predictable</i> for the user to find what they need. However, it can be useful for prioritizing or arranging it in a custom sequence rather than alphabetically. <br> Also when a folder is delted or added, It does'nt affect his order, <br> Numering creates a control to maintain the user's customized sequence."
					},
					i2: {
						p_1: "empty",
					}
				},
				article_13: {
					_id: 'Level 3',
					h1: '1.3 The Levels 3 - Subcategories (Units, Theme, Topics, etc.)',
					p1: "There are two ways to structure; <br>If the Folder will stay for a long time you should be use a <strong>Chill Structure</strong>,<br> Otherwise if it's a Temporary Folder (only used for a period of time), you should be use a <strong>Control Structure</strong>.",
				},
				article_13_1: {
					h1: '1.3.1 Chill Structure',
					i1: { // TODO: CHANGE IMAGE FOR A GIF
						p_1: "https://i.pinimg.com/originals/e3/c0/7e/e3c07edbe1b8d5a666feb929588178d8.png",
					},
					p1: "Is easy, Just use an incremental enumeration with two or more digits, followed by a descriptive name.",
					c1: {
						t: 'warning',
						c_1: "Remember, this folder should remain for a long time, so it's essential to name it with something descriptive, like a topic, theme,  job, or subject"
					},
					p2: 'You can use if:',
					ul1: {
						li_0: "Had or Need a static sequence (eg. 01.Name 02.Name 03.Name ...)",
						li_1: "The directory will remain for a long time or permanently",
					},
					i2: {
						p_1: "empty",
						p_2: "empty"
					},
					c2: {
						t: 'info',
						c_1: '<strong>Note</strong>: That the way you organize will determine whether your Support Nodes come before or after. Remember, the order always be Symbols-Numbers-Letters."'
					}
				},
				article_13_2: {
					h1: '1.3.2 Control Structure',
					i1: {
						p_1: "https://i.pinimg.com/originals/5c/17/67/5c1767b95d0d83f7d7023bb890e47482.png",
					},
					p1: 'It\'s ideal for projects, presentations, database, homeworks, etc. Use a naming convetion for controling and easy identification',
					c1: {
						t: 'warning',
						c_1: '<strong>Important</strong>: It has a naming convention, here is the meaning of each part;'
					},
					t1: {
						table1_head: [
							{ col_1: 'Part', col_2: 'Meaning' },
						],
						table1_content: [
							{ col_1: 'Identificator', col_2: 'It\'s a code label that identifies it.' },
							{ col_1: 'Traker', col_2: 'It\'s your tracking index, if you use.' },
							{ col_1: 'Date', col_2: 'The format is \'YY-MM-DD\', within parentheses' },
							{ col_1: 'Breadcrumb', col_2: 'Use current or nearby folder category name.' },
							{ col_1: 'Holder', col_2: 'Refers to client, organization, school, or reference name, within brackets' },
							{ col_1: 'Name', col_2: 'Is the proj, pres, DB, hw name.' },
							{ col_1: 'Keywords', col_2: 'Are descriptive words or phrases.' }
						],
					},
					c2: {
						t: 'success',
						c_1: '<strong>Tip</strong>: It\'s not necessary to have all the fields, tho follow in that order, (adapt it to your needs).'
					},
					p2: 'You can use if:',
					ul1: {
						li_0: "You Need to have control",
						li_1: "The data is temporary and will most likely be deleted later",
						li_2: "Share with more people if you",
					},
					i2: {
						p_1: "empty",
					}
				}
      },
			page_02: {
				article_20: {
					_id: 'Support Nodes',
					h1: '2. Support Nodes',
					p1: 'The Support Nodes are designed to be helpful at the current level. In that sense support the user. Each has a unique identifier, making it easy to differentiate and quickly identify them.'
				},
				article_21: {
					_id: 'Settings Folder',
					h1: "Settings Folder (99)",
					p1: "Its unique identifier should be '99', so you'll probably find it as '99.Settings'",
					p2: "This folder contains general configurations for 'ANT', for your programs, interfaces, or Operating System."				
				},
				article_22: {
					_id: 'Review Folder',
					h1: "Review Folder (98)",
					p1: "Its unique identifier should be '98', so you'll probably find it as '98.math', '98.marketing' or '98.instagram'.",
					p2: "This folder contains all your files and directories that have no classification, need renaming, or maybe are not from the current level.",
					p3: "In other words, they need to be reviewed before being into the system, and this folder helps you avoid mixing them with your other files.",
					c1: {
						t: 'warning',
						c_1: "<strong>Important</strong>: Use the identifier, followed by a dot, followed by the name of the current path or similar (preferably write it in kebab-case)",
					},
					
				},
				article_23: {
					_id: 'Resources Folder',
					h1: "Resources Folder (90)",
					p1: "It's unique identifier should be '90'. so it should be named '90.Resources'.",
					p2: "This folder helps organize those files that due to their nature; are frequently used, as brand guidelines, presets, multimedia, libraries, logos, or any other for use.",
					p3: "Usage Suggestions:",
				},
				article_24: {
					_id: 'Archive Folder',
					h1: "Archive Folder (00)",
					p1: "Its unique identifier should be '00', so you'll can use it as '00.Final', '00.Ready', '00.Renders', '00.forProduction', etc.",
					p2: "This folder it's meant contain your deliverables or already delivered items, e.g. for your projects, homeworks, presentations, or any completed job, as well as each of its subsequent versions.",
					c1: {
						t: 'info',
						c_1: "<strong>Note</strong>: It's only for your Final Files. Don't create one folder for each one.",
					},
					p3: "Usage Suggestions:",
				},
				article_25: {
					_id: 'Temporal Folder',
					h1: "Temporal Folder (~)",
					p1: "Its unique identifier should be '~'. so you'll probably find it as '~.temporal', '~temp', '~agascfsa'",
					c1: {
						t: 'info',
						c_1: "<strong>Note</strong>: It doesn't really need an identifier, but this way, you'll know to delete it when it's empty.",
					},
					c2: {
						t: 'success',
						c_1: "You can also call it '~temp', 'temporal', anyway, just remember delete it.",
					},
					p2: "This is a folder that will help you organize a couple of files without adding them to 'temporal' and be easy to identify.",
					p3: "Because those files either don't belong at that level or are needed immediately.",
					c3: {
						t: 'quote',
						c_1: "The reason was the symbol '~' is for the organizacion ASCI then this appears in the begin.",
					},
				},
				article_26: {
					_id: 'Workboard Folder',
					h1: "Workboard Folder (PJ, PR, PP, HW)",
					p1: "Its could be different identifier.",
					p2: "It helps organize your work-related files into distinct categories such as:",
					ul1: {
						li_0: "need a static sequence",
						li_1: "the directory is a permanent category",
						li_2: "Share with more people if you",
					},
				}
			},
			page_03: {
				article_30: {
					h1: "3. Files Nomenclature",
					p1: "204 - No Content"
				}
			}
    },
		title_03: {
			page_01: {
				article_01: {
					_id: '',
					h1: "3. Nomenclature",
					p1: "204 - No Content"
				}
			}
		}
  },
  ES: {
    title_01: {
			// header : {
			// 	h3: 'Introducción',
			// 	h1: '¿Que es ANT?',
			// },
			page_01: {
				article_01: {
					_id: 'Intro',
					h1: 'Qué es ANT?',
					c1: {
						c_1: "<strong>El sistema ANT</strong> (Archive Nesting Technique System) <br> es un sistema de <i>metodos de organizacion</i> diseñado para optimizar el almacenamiento, administración de proyectos y encontrar archivos de forma facil y rápida.",
					},
					p1: 'Este sistema surgio en un un ambiente de trabajo para <strong>gestionar un gran volumen de archivos</strong> y fue <strong>re-adaptado para su uso domestico</strong> de modo que sea facil de implementar para cualquier usuario. <br> Aun asi destacamos que esta pensado <strong><i>principalmente para el home office y los estudiantes</i></strong>, pero cuenta con la flexibilidad para cubrir otras áreas.',
					p2: "<br>Es un sistema con metodos de organizacion esta estructurado de una manera que imita una colonia de hormigas, Tecnicamente funciona con una Estructura Jerárquica con Grafo Dirigido Acíclico (DAG) adaptado para la estructura de datos de arbol convencional, Por otro lado, crea una infraestructura descentralizada y modular, lo que lo hacer ser flexible pero ductil con la informacion.",
					p3: "<br> El objetivo de este sistema y sus metodos es que aunque se maneje una gran cantidad y variedad, esta pueda ser organizada y gestionada dinamicamente",
					hidden_p4: "En otras palabras, siempre y cuando el usuario siga estos metodos, al crear o entrar un archivo a su sistema sera libre de editar, compartir, migrar, versionar, etc, con una muy alta probabilidad de que su informacion no sea comprometida, duplicada y/o se pierda entre los demas archivos."
				},
				article_02: {
					_id: 'How does ANT work',
					h1: '¿Como funciona?',
					p1: "Este sistema conbina una serie de reglas y procesos de categorización, que le permite como indica <i>categoriza</i>, dividiendo y ordenando de una forma logica y flexible toda la informacion que entra o se crea dentro de ella.",
					p2: "<br>Estos procesos organizan los archivos en niveles y categorías. También emplean una convención de nomenclatura para garantizar la facilidad de búsqueda e identificación. Esto, a su vez, facilita al motor de indexación encontrar archivos, dándoles mayor precisión y rapidez para encontrarlos con la caja de búsqueda.",
					p3: "<br>Es importante destacar que entre estos procesos fueron inspirados en sistemas como el CDD y el CDU, y fue diseñado a peticion de una institucion privada, por lo que tuvo pruebas durante su desarrollo y contó con el apoyo de personas que continuamente brindaron su retroalimentación, permitiendo que se adaptara y mejorara durante todo el proceso.",
				},
				article_03: {
					_id: 'Adapts to Different Users',
					h1: '¿Como ANT se adapta a diferentes usuarios?',
					p1: "Aunque inicialmente diseñado para uso institucional, el sistema ANT es lo suficientemente flexible como para adaptarse a diversos perfiles de usuario, como estudiantes, freelancers y Home Offices. ",
					p2: "<br>",
					ul1: {
						li_0: "<strong>Para Estudiantes:</strong> Permite gestionar fácilmente tareas, investigaciones y archivos de proyectos, con la capacidad de hacer seguimiento de versiones y agrupar archivos por materias o semestres.",
						li_1: "<strong>Para el Home Office:</strong> La gestión de archivos relacionados con el trabajo se vuelve más sencilla con una estructura dedicada a proyectos en curso y completados, facturas y materiales de referencia.",
						li_2: "<strong>Para uso Personal:</strong> ANT ayuda a los usuarios a mantener un espacio digital libre de desorden, ofreciendo un enfoque metódico para organizar fotos, documentos personales y pasatiempos.",
						p3: "Aunque es multiproposito, puedes tener mas de uno de estos perfiles y usar el sistema en el mismo Almacenamiento Raíz.",
					},
				},
				article_04: {
					_id: 'Key benefits es',
					h1: 'Beneficios al usar ANT',
					ul1: {
						li_0: "<strong>1. Organización Estructurada:</strong> Los archivos están organizados en una estructura jerárquica clara, lo que facilita su navegación.",
						li_1: "<strong>2. Nomenclatura Conveniente:</strong> Las carpetas y subcarpetas están nombradas con un patrón incremental e intuitivo, mejorando la organización, creación y búsqueda de contenido.",
						li_2: "<strong>3. Escritorio Limpio:</strong> Una carpeta especial de 'Proyectos' sirve como un Repositorio Temporal para proyectos actuales y futuros, eliminando la necesidad de usar el escritorio para estos fines y manteniéndolo libre de desorden.",
						li_3: "<strong>4. Seguimiento Maestro de Proyectos de Trabajo/Escuela:</strong> Permite rastrear proyectos en curso y almacenar ideas. Cuando un proyecto esté terminado, lo sabrás. Si necesitas archivos de otro proyecto, sabrás dónde están."
					},
				}
			},
		},
		title_02: {
			page_01: {
				article_10: {
					_id: 'Estructura e Infraestructura',
					h1: '1. Estructura e Infraestructura',
					p1: "<strong>ANT tiene una estructura jerarquica</strong> adaptada para ser implementada en la estructura de arbol convencional, <br> <strong>Sin embargo, al tener una infraestructura modular decentralizada</strong>, sigue unas normas de estructura especificas que garantizara su correcto funcionamiento. <br> Para esto debemos entender los terminos de \"Niveles\", \"Nodos\" y \"Modulos\" de este sistema.",
					ul1: {
						li_0: "El termino <strong>\"Niveles\"</strong> se refeire a la profundidad de la carpeta con respecto a su carpeta raiz",
					},
					c1: {
						c_1: '<strong>Tip</strong>: Sugerimos 3 niveles. <br> Si bien podrías tener más, es recomendable no tener demasiados niveles y usarlos solo en ciertos casos.'
					},
					i1: {
						p_1: "https://i.pinimg.com/originals/d1/50/7f/d1507f192fcecd9bdce59a557bf468b7.png",
						p_2: "https://i.pinimg.com/originals/39/c3/d2/39c3d209134b6385ff52e63a21cf0b83.png",
					},
					ul2: {
						li_0: "El termino <strong>\"Nodo\"</strong> se refiere a cada una de las carpetas.",
					},
					c2: {
						c_1: "Es cierto, podriamos solo llamarle <i>carpeta</i>, pero en este sistema, cada carpeta actuará como un nodo (vertice o punto), <br> Teniendo uno o más entradas/salidas, siendo parte de un modulo (grupo), y en ciertos casos teniendo una Vida de archivo (duración de existencia).",
					},
					i2: {
						p_1: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2phNHR3aGlkZ281NDh6NHhmbDM2OThvc2MxZ3R6MDN2NmVwcTA0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPUFqtt4ydWj5rmPNM/giphy.gif",
					},
					ul3: {
						li_0: "Por ultimo, el termino <strong>\"Modulo\"</strong> se refiere a un grupo de nodos con respecto a un nivel, su <strong>Categoría</strong>. Es decir, que los nodos independientemente de sus conexiones, guardan una agrupacion jerarquica en la estructura de arbol",
					},
					i3: {
						p_1: "empty",
					},
				},
				article_11: {
					_id: 'Nivel 1',
					h1: '1.1 Nivel 1 - Categorías Principales',
					p1: "Son los primeros nodos (Carpetas) dentro de tu Carpeta de Almacenamiento Raíz; <br> El nombre es altamente descriptivo, ya que detalla el contenido de ese espacio.",
          c1: {
            t: 'warning',
            c_1: "Cada nodo solo servirá como contexto, asignando y agrupando los modulos del siguiente nivel. <br> Aqui solamente hay carpetas; no debe existir ningun archivo."
          },
					p2: "<br>Estos primeros nodos (carpetas) se nombran con la siguiente convencion: ",
					ul1: {
						li_0: "Numeracion incremental de 3 digitos en secuencia de 100.",
						li_1: "Un punto (como separador).",
						li_2: "Nombre en UPPERCASE (Mayusculas).",
					},
					c2: {
						c_1: "<strong>Importante</strong>: Se define la primera vez y debera permanecer asi, el renombrarlo despues de un tiempo puede causar conflictos con programas que usan rutas absolutas, teniendo que revincular TODO nuevamente."
					},
					p3: "Recomendamos usar los siguientes nombres de categorias, en el siguiente orden;",
					ul2: {
						li_0: "<strong>100.PERSONAL</strong>: Para tus archivos y documentos personales",
						li_1: "<strong>200.TRABAJO</strong>: Para archivos relacionados de trabajo",
						li_2: [
							["<strong>300.PROJECTOS</strong>:"],
							[ // nested anchor 
								"Carpeta de soporte, (orden opcional)",
								"/concepts/Support-Nodes",
								"Project-Folder",
								""
							]	],
						li_3: "<strong>400.ACADEMICO</strong>: Para archivos escolares o relacionados",
						li_4: "<strong>500.HOBBIES</strong>: Para archivos relacionados con actividades de tu tiempo libre", // 
					},
					a1: "Leer más acerca de la carpeta de soporte <i>\"PROYECTOS\"</i>",
					c3: {
						c_1: "Separarlo en estos contextos permite mantener y manejar archivos por separado, reduciendo la probabilidad de mezclar archivos, ademas deayudar a mantener un enfoque claro de su uso y lo que se encuentra alli."
					},
					p4: "Asi mismo en el mismo nivel tendremos otras 3 Nodos de Soporte:",
					ul3: {
						li_0: [ 
							["<strong>900.RESOURCES</strong>: Herramientas y Programas"],
							[ // nested anchor 
								"read more",
								"/concepts/Support-Nodes",
								"Resources-Folder",
								""
							]	],
						li_1: [ 
							["<strong>998.REVIEW</strong>: Un directorio de accesos directos a Carpetas de Revision"],
							[ // nested anchor 
								"read more",
								"/concepts/Support-Nodes",
								"Review-Folder",
								""
							]	],
							li_2: [ 
								["<strong>999.SETTINGS</strong>:Configuraciones del sistema ANT, Programas y del Sistema Operativo"],
								[ // nested anchor 
									"read more",
									"/concepts/Support-Nodes",
									"Settings-Folder",
									""
								]	],
					},
					p5: "<br>Se deberia ver de esta manera:",
					i2: {
						p_1: "empty",
					},
				},
				article_12: {
					_id: 'Nivel 2',
					h1: '1.2 Nivel 2 - Categorías',
					p1: "Estos se encuentran dentro de una carpeta de \"Nivel 1\", sus nodos hijos; <br> El nombre deberia describir un tema o sujeto correspondiente a su padre. Entonces al ser mas especificas este seria como Área, Tema, Asunto, Organización, Tipo de trabajo o relacionado.",
          c1: {
            t: 'warning',
            c_1: "Cada nodo solo servirá como contexto, asignando y agrupando los modulos del siguiente nivel. <br> Aqui solamente hay carpetas; no debe existir ningun archivo."
          },
					p2: "Estos nodos (carpetas) se nombran con la siguiente convencion:.",
          ul1: {
						li_0: "Numeracion incremental de 2 digitos (del 1 al 89).",
						li_1: "Un punto (como separador).",
						li_2: "Nombre en PascalCase",
					},
					c2: {
						c_1: "El orden en la secuencia no es escencial y solo facilita su organizacion visual. <br> Si bien podria no represantar una secuencia logica el hecho de numerar hace que sea mas predecible para el usuario encontrar la que necesita, <br> Sin embargo, puede ser util para priorizar u ordenarla en una secuencia personalizada y no alfabeticamente. <br> Ademas numerarlo crea un control para mantener la secuencia personlizada del usuario."
					},
          i2: {
						p_1: "empty",
					}
				},
				article_13: {
					_id: 'Nivel 3',
					h1: '1.3 Nivel 3 - Categorías (Unidades, Tema, Temas, etc.)',
					p1: "Hay dos formas de estructurar;<br> Si la Carpeta la tendras por mucho tiempo, deberias usar una <strong>Estructura de Congelación</strong>,<br> De lo contrario, si es una Carpeta Temporal (solo se usará por un período corto), usa una <strong>Estructura de Control</strong>.",
				},
				article_13_1: {
					h1: '1.3.1 Estructura de Congelación',
					p1: 'Es simple, tiene una enumeración incremental con dos o más dígitos, aunque no necesariamente va al principio, ya que dependerá de las necesidades/personalizaciones de cada quien.',
					p2: 'Puedes usarla si:',
					ul1: {
						li_0: "Necesitas o ya tiene una secuencia estatica (ej. 01.Nombre 02.Nombre 03.Nombre ...)",
						li_1: "La carpeta permanecera para un tiempo largo o permanentemente",
					},
					c1: {
						c_1: '<strong>Nota</strong>: La forma en que organizas determinará si tus carpetas de soporte vienen antes o después. Consulta <a href="https://ticsw.gitbooks.io/talleres/content/BigO_Sort/tipos_de_ordenamientos.html#Ordenamiento%20Lexicográfico" target="_blank"><u><i>prioridad de orden lexicográfico</u></i></a>'
					},
				},
				article_13_2: {
					h1: '1.3.2 Estructura de Control',
					p1: 'Es ideal para proyectos, presentaciones, bases de datos, tareas, etc. Se utiliza una convención de nombres para controlar y facilitar su identificación.',
					c1: {
						c_1: '<strong>Importante</strong>: Tiene una convención de nombres, enseguida se muestra una tabla de referencia'
					},
					t1: {
						table1_head: [
							{ col_1: 'Parte', col_2: 'Significado' },
						], 
						table1_content: [
							{ col_1: 'Identificador', col_2: 'Es una etiqueta de código que lo identifica.' },
							{ col_1: 'Traker', col_2: 'Es tu índice de seguimiento (si lo usas).' },
							{ col_1: 'Fecha', col_2: "La fecha con formato 'AA-MM-DD', va entre paréntesis." },
							{ col_1: 'Breadcrumb', col_2: 'Usa el nombre de la categoría de la carpeta actual o cercana.' },
							{ col_1: 'Holder', col_2: 'Se refiere al cliente, organización, escuela o nombre de referencia, va entre corchetes.' },
							{ col_1: 'Nombre', col_2: 'Es el nombre del proyecto, presentación, base de datos o tarea.' },
							{ col_1: 'Keywords', col_2: 'Son palabras o frases descriptivas, palabras clave.' }
						],
					},
					c2: {
						c_1: '<strong>Tip</strong>: No es necesario rellenar todos los campos, solo continuar con el orden.'
					},
					p2: 'Puedes usarla si:',
					ul1: {
						li_0: "Requieres un control",
						li_1: "La información se mantendra por mucho tiempo",
						li_2: "Compartiras con mas de una persona",
					}
				}
			},
			page_02: {
				article_20: {
					_id: 'Support Nodes',
					h1: '2. Carpetas de Soporte',
					p1: 'Estas carpetas fueron diseñadas para que te sirvan de ayuda en el nivel donde estes. En ese sentido Ayuda al usuario. Cada una cuenta con un idenficador unico, lo que la hace diferenciarse e identificarse rapidamente del resto.'
				},
				article_21: {
					_id: 'Settings Folder',
					h1: 'Carpeta de Configuracion (99)',
					p1: "Su identificador deberia ser '99', probablemente ya la tienes como '99.Configuracion'",
					p2: "Esta carpeta por lo general deberia contener configuracion de tu 'ANT', tus programas, configuraciones de Interfaces, y tu Sistema Operativo.",
				},
				article_22: {
					_id: 'Review Folder',
					h1: 'Carpeta de Revision (98)',
					p1: "Su Identificadro deberia ser '98', probablemente lo encontraras como '98.Matematicas', '98.Marketing' o '98.Instragram'. ",
					p2: 'Este folder contiene todos tus archivos y carpetas que no tienes clasificados, necesitan renombrarse o probablemente ni pertenecen al actual nivel.',
					p3: 'En otras palabras, necesitan revision antes de ingresar al sistema, y este folder te ayuda a esto y para no mezclarlo con otros archivos.',
					c1: {
						c_1: '<strong>Importante</strong>: Usa el identificador, seguido de un punto, seguido del nombre de la actual ruta o similar (preferentemente usa kebab-case)'
					}
				},
				article_23: {
					_id: 'Resources Folder',
					h1: 'Carpeta de Recursos (90)',
					p1: "Su Identificadro deberia ser '90', asi que deberia estar nombrada como '90.Recursos'.",
					p2: 'Esa carpeta ayuda a organizar aquellos archivos que, debido a su naturaleza, son frecuentemente usados, como un manual de identidad, ajustes preestablecidos, multimedia, librerias, logotipos, o cualquier archivo que sirva como un recurso. ',
					p3: ''
				},
				article_24: {
					_id: 'Archive Folder',
					h1: 'Carpeta Archivadora (00)',
					p1: "...",
					p2: '...',
					c1: {
						c_1: "<strong>Nota</strong>:",
					},
					
					p3: '...'
				},
				article_25: {
					_id: 'Temporal Folder',
					h1: 'Carpeta Temporal (~)',
					p1: '...',
					c1: {
						c_1: "<strong>Nota</strong>:",
					},
					c2: {
						c_1: "<strong>Tip</strong>:",
					},
					
					p2: '...',
					p3: '...',
					c3: {
						c_1: "...",
					},
					
				},
				article_26: {
					_id: 'Workboard Folder',
					h1: 'Espacio de Trabajo (Tarea, Proyecto, Presentación)',
					p1: '...',
					p2: '...',
					ul1: {
						li_0: "...",
						li_1: "...",
						li_2: "...",
					},
				}
			},
			page_03: {
				article_30: {
					_id: '',
					h1: "3. Nomenclatura de Archivos",
					p1: "204 - No Content"
				}
			}
		}
  }
};