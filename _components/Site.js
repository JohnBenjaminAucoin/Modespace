import path from 'path'

path.join(process.cwd(), 'public/_sites')

export default function Site({site}) {
    return (
      
            <a href={`${site.url}`}>

            <div  style= {{
              backgroundImage: `url('Modespace${site.coverImage}')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              width: '100%',
            }}>
              <div>
                <h3>{site.title}</h3>
                <div>
                  <span>{site.tags[0]}</span>
                  <span>
                    {
                      site.tags.slice(1).map(
                      (tag) => ( <span key={tag}>{tag}</span>))
                    }
                  </span>
                </div>
              </div>

            </div>
            
            </a>
    );
  }