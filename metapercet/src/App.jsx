import './App.scss';

function App() {


  return (
    <>
      <div className='header'>
        <div className='content'>
          <div className='logo'>
            logo
          </div>
          <div className='menu'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><button>Button</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='title'>
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quam perspiciatis! Dolor optio in Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button>Read More</button>
        </div>
        <div class='cont'>
          <h1>Classes</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deserunt.</p>
        </div>
        <div className='grid'>
          <div class="parent">
            <div>
              <div className='img'><img src="images/training-certification/Technical-Writing.jpg" alt="" /></div>
              <div className='text'><h3>BasicTechnicalWriting</h3>
                <p>This course focuses on understanding the basics of technical writing and developing technical writing skills. In this course you will learn techniques to analyze writing contexts which helps you to produce effective, clean, and reader-center documents efficiently.</p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Advanced-DITA–XML.jpg" alt="" /></div>
              <div className='text'><h3>
                ConfluenceAdvanced
              </h3>
                <p>This course focuses to ensure your documentation-type content is easy to manage and consume. This skill builder covers useful techniques to surface relevant documentation and standardize your content using templates and blueprints. It includes how to set up a knowledge-base in Confluence for self- service customer support in JIRA Service Desk. It is useful for both Confluence Server Administrators and Confluence Cloud Administrators.</p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Basic-DITA–XML.jpg" alt="" /></div>
              <div className='text'><h3>ConfluenceBasic</h3>
                <p>
                  "This course guide end users to create their own easy to use and well-formatted content. This Skillbuilder covers templates, page and space structure, and categorization for content governance and discovery. It includes using cases, common/practical examples, best practices, and suggested solutions to structure and display your Confluence space content effectively using built-in features."

                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Authoring-Tools.jpg" alt="" /></div>
              <div className='text'><h3>XMLAuthor</h3>
                <p>
                  "This course focuses deepen the knowledge in XML Author, in any industry. In this course, you'll learn about writing content in a fully structured and easy–to–use environment optimized for producing valid XML and production of multiple outputs for print and online delivery."

                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Technical-Writing.jpg" alt="" /></div>
              <div className='text'><h3>AdvancedTechnicalWriting-API</h3>
                <p> "This course focuses on deepening the knoweldge of technical content deliverable, containing instructions about how to effectively use and integrate with an API. It’s a concise reference manual containing all the information required to work with the API, with details about the functions, classes, return types, arguments and more, supported by tutorials and examples."
                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="https://metapercept.com/images/training-certification/Advanced-DITA–XML.jpg" alt="" /></div>
              <div className='text'><h3>BasicDITA-XM</h3>
                <p>
                  "This course focuses on individuals keen to broaden their knowledge or specialize in basic DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA."

                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="https://metapercept.com/images/training-certification/Basic-DITA%E2%80%93XML.jpg" alt="" /></div>
              <div className='text'><h3>AdvancedDITA-XML</h3>
                <p>
                  "This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA."

                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Authoring-Tools.jpg" alt="" /></div>
              <div className='text'><h3>xMetaLAuthor</h3>
                <p>
                  "Learn xMetal for XML based authoring to manage high volume structured content development and management. This training program is meant for the Technical Writers, Technical Authors, and Information Developers, working on high-end documentation for Automobile, Aerospace, Hardware, and Manufacturing business domains."

                </p>
                <button>view</button></div>
            </div>
            <div>
              <div className='img'><img src="images/training-certification/Simplified-Technical-English.jpg" alt="" /></div>
              <div className='text'><h3>
                MadCapFlare
              </h3>
                <p>"This course focuses on developing technical writing skills to deepen the knowledge of Madcap Flare for writing specialized content in structured format using DITA-XML and other structured formats. This course use a combination of lectures, demonstrations, and hands-on practice exercises to explore the major features of Flare."
                </p>
                <button>view</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='bottom'>
          <div className='copy'>copyright @2021 . All Rights reserved</div>
          <div className='back'><a href="/">Back</a></div>
        </div>
      </div>
    </>
  )
}

export default App
