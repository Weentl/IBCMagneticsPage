import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import ServicesSection from '../components/home/ServicesSection';
import ProductsPreview from '../components/home/ProductsPreview';
import CaseStudies from '../components/home/CaseStudies';
import LocationsContact from '../components/home/LocationsContact';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsPreview />
      <ServicesSection />
      <TrustSection />
      <CaseStudies />
      <LocationsContact />
    </div>
  );
};

export default Home;
