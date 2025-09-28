import './GameCard.css';

export default function GameCard({
  title,
  cover,
  price,
  tags = [],
  ribbon,
  onClick,
  description,
  open = false,
  onToggle,
  href,           
  download,       
  openInNewTab,   
  ariaLabel,
  className = '',
  style,
}) {
  const Root = href ? 'a' : 'article';
  const classes = ['gc-card', className].filter(Boolean).join(' ');

  const commonProps = {
    className: classes,
    onClick,
    'aria-label': ariaLabel || title || 'card',
    style,
  };

  const rootProps = href
    ? {
        ...commonProps,
        href,
        target: openInNewTab ? '_blank' : undefined,
        rel: openInNewTab ? 'noopener noreferrer' : undefined,
        download:
          typeof download === 'string' ? download : download ? '' : undefined,
      }
    : {
        ...commonProps,
        role: onClick ? 'button' : undefined,
        tabIndex: onClick ? 0 : undefined,
      };

  return (
    <Root {...rootProps}>
      <div className="gc-cover">
        <img
          src={cover}
          alt={title || 'game cover'}
          className="gc-img"
          loading="lazy"
        />
        {ribbon ? <div className="gc-ribbon">{ribbon}</div> : null}
      </div>

      <div className="gc-body">
        <div className="gc-headrow">
          {title ? <h3 className="gc-title">{title}</h3> : null}
          {description ? (
            <button
              type="button"
              className="gc-toggle"
              aria-expanded={open}
              aria-controls="gc-details"
              onClick={(e) => {
                e.preventDefault();  
                e.stopPropagation();  
                onToggle && onToggle();
              }}
            >
              <span className="gc-toggle-text">{open ? 'Hide' : 'Details'}</span>
              <svg viewBox="0 0 24 24" className={`gc-chevron ${open ? 'is-open' : ''}`} aria-hidden>
                <path d="M8.12 9.29L12 13.17l3.88-3.88 1.41 1.41L12 16l-5.29-5.29z" fill="currentColor"/>
              </svg>
            </button>
          ) : null}
        </div>

        <div className="gc-row">
          {price ? <span className="gc-price">{price}</span> : <span />}
          <svg aria-hidden viewBox="0 0 24 24" className="gc-icon">
            <path fill="currentColor" d="M7 10h10v2H7z" />
          </svg>
        </div>

        {Array.isArray(tags) && tags.length > 0 ? (
          <ul className="gc-taglist">
            {tags.map((t, i) => (
              <li key={i} className="gc-tag">{t}</li>
            ))}
          </ul>
        ) : null}

        {description ? (
          <div id="gc-details" className="gc-details" data-open={open ? 'true' : 'false'}>
            <p className="gc-details-text">{description}</p>
          </div>
        ) : null}
      </div>
    </Root>
  );
}
