import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rank higher on search engines with our proven SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO']
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Social Media Marketing',
      description: 'Engage your audience and build a strong brand presence across all social platforms.',
      features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Analytics & Reporting']
    },
    {
      icon: 'fas fa-ad',
      title: 'PPC Advertising',
      description: 'Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
    },
    {
      icon: 'fas fa-pen-fancy',
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      features: ['Blog Writing', 'Video Production', 'Infographics', 'Email Campaigns']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and actionable insights.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Market Research']
    },
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Build stunning, responsive websites that convert visitors into customers.',
      features: [
        'Website Launch Package (design, build, and go-live)',
        'Custom Design',
        'E-commerce Solutions',
        'Mobile Optimization',
        'Maintenance & Support'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover-overlay">
                <p>
                  {service.features.map((feature, idx) => (
                    <React.Fragment key={idx}>
                      ✓ {feature}
                      {idx < service.features.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

