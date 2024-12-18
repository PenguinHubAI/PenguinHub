'use client';

import { Box, Container, Typography, Button, Grid, Card, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteConstants } from '@/providers/site-constants-provider';
import { useState, useEffect } from 'react';
import { CategoryScroll } from '@/components/home/category-scroll';

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
  cta: {
    main: string;
    link: string;
  };
}

const carouselSlides: CarouselSlide[] = [
  {
    title: 'Discover AI Penguins',
    description: 'Find the perfect AI companion for your business needs in our marketplace.',
    image: '/penguin-pattern-1.jpg',
    cta: {
      main: 'Browse Marketplace',
      link: '/marketplace'
    }
  },
  {
    title: 'Smart Business Solutions',
    description: 'Explore our collection of AI-powered penguins ready to transform your workflow.',
    image: '/penguin-pattern-2.jpg',
    cta: {
      main: 'Start Shopping',
      link: '/marketplace/featured'
    }
  },
  {
    title: 'Custom AI Assistants',
    description: 'Each penguin is uniquely trained to handle specific business tasks.',
    image: '/penguin-pattern-3.jpg',
    cta: {
      main: 'Find Your Penguin',
      link: '/marketplace/search'
    }
  },
];

export default function HomePage() {
  const { themeColors, layoutConfig, semanticColors } = useSiteConstants();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const popularSolutions = [
    {
      title: 'AI Task Automation',
      description: 'Let our penguins handle your repetitive tasks while you focus on growth.',
      image: '/penguin-business.png',
      href: '/marketplace/automation'
    },
    {
      title: 'Business Analytics',
      description: 'Get insights and recommendations from data-savvy penguin assistants.',
      image: '/penguin-automation.png',
      href: '/marketplace/analytics'
    },
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer service with friendly AI penguin representatives.',
      image: '/penguin-customers.png',
      href: '/marketplace/support'
    },
  ];

  const categories = [
    { title: 'Finance', image: '/finance.png', href: '/marketplace/finance', color: themeColors.lightBlue.light },
    { title: 'Sales & Marketing', image: '/marketing.png', href: '/marketplace/sales', color: themeColors.blue.light },
    { title: 'Customer Service', image: '/customer-service.png', href: '/marketplace/customer-service', color: themeColors.yellow.light },
    { title: 'HR & Operations', image: '/operations.png', href: '/marketplace/hr', color: themeColors.coral.light },
    { title: 'Product & Design', image: '/design.png', href: '/marketplace/product', color: themeColors.grey.main },
    { title: 'Analytics', image: '/analytics.png', href: '/marketplace/analytics', color: themeColors.grey.light },
  ];

  return (
    <Box sx={{ bgcolor: semanticColors.background.default }}>
      {/* Hero Carousel Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '500px', md: '600px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '55%',
            minWidth: '400px',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
          }}
        >
          {carouselSlides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                background: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '24px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'brightness(1.2)',
                  borderRadius: '24px',
                },
              }}
            >
              <Container 
                maxWidth={false}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  px: { xs: 3, md: 6 },
                }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '2.25rem', md: '3rem' },
                    mb: 3,
                    color: themeColors.darkBlue.main,
                    textAlign: 'center',
                    opacity: 0,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(255, 255, 255, 1)',
                    animation: 'slideUp 0.5s ease-out forwards',
                    '@keyframes slideUp': {
                      from: {
                        transform: 'translateY(20px)',
                        opacity: 0,
                      },
                      to: {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    maxWidth: '100%',
                    mx: 'auto',
                    textAlign: 'center',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: themeColors.darkBlue.dark,
                    opacity: 0,
                    letterSpacing: '0.01em',
                    textShadow: '0 1px 3px rgba(255, 255, 255, 1)',
                    animation: 'slideUp 0.5s ease-out 0.2s forwards',
                    px: { xs: 2, md: 4 },
                  }}
                >
                  {slide.description}
                </Typography>
                <Button
                  component={Link}
                  href={slide.cta.link}
                  variant="contained"
                  startIcon={<StorefrontIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '12px',
                    backgroundColor: themeColors.blue.main,
                    '&:hover': {
                      backgroundColor: themeColors.blue.dark,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out',
                    },
                  }}
                >
                  {slide.cta.main}
                </Button>
              </Container>
            </Box>
          ))}

          {/* Carousel Controls */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              display: 'flex',
              gap: 2,
            }}
          >
            <IconButton
              onClick={handlePrevSlide}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextSlide}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Category Scroll Section */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          overflow: 'hidden'
        }}
      >
        <CategoryScroll />
      </Container>

      {/* Popular Solutions Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
            color: themeColors.darkBlue.main,
          }}
        >
          Featured AI Penguins
        </Typography>
        <Grid container spacing={4}>
          {popularSolutions.map((solution) => (
            <Grid item xs={12} sm={6} md={4} key={solution.title}>
              <Card
                component={Link}
                href={solution.href}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  borderRadius: layoutConfig.borderRadius.large,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${themeColors.grey.dark}`,
                  bgcolor: 'white',
                  boxShadow: 'none',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    borderColor: themeColors.blue.main,
                    bgcolor: themeColors.grey.light,
                  },
                }}
              >
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Box
                    sx={{
                      width: '64px',
                      height: '64px',
                      borderRadius: layoutConfig.borderRadius.medium,
                      bgcolor: themeColors.lightBlue.light,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Typography variant="h4">🐧</Typography>
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      color: themeColors.darkBlue.main,
                    }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      lineHeight: 1.6,
                      color: themeColors.darkBlue.main,
                      opacity: 0.85,
                    }}
                  >
                    {solution.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Action Buttons */}
        <Box sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button
                component={Link}
                href="/marketplace"
                variant="contained"
                startIcon={<StorefrontIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '12px',
                  backgroundColor: themeColors.blue.main,
                  '&:hover': {
                    backgroundColor: themeColors.blue.dark,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Visit Marketplace
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                href="/seller"
                variant="outlined"
                startIcon={<SellIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '12px',
                  borderColor: themeColors.blue.main,
                  color: themeColors.blue.main,
                  '&:hover': {
                    borderColor: themeColors.blue.dark,
                    backgroundColor: 'rgba(78, 160, 198, 0.05)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Become a Seller
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Categories Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
            color: themeColors.darkBlue.main,
          }}
        >
          Browse by category
        </Typography>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={6} sm={4} md={2} key={category.title}>
              <Card
                component={Link}
                href={category.href}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  p: layoutConfig.spacing.medium,
                  borderRadius: layoutConfig.borderRadius.large,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${themeColors.grey.dark}`,
                  bgcolor: category.color,
                  boxShadow: 'none',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    borderColor: themeColors.blue.main,
                  },
                }}
              >
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1,
                  }}
                >
                  <Typography variant="h5">{category.title === 'Finance' ? '💼' : 
                    category.title === 'Sales & Marketing' ? '📢' :
                    category.title === 'Customer Service' ? '🎧' :
                    category.title === 'HR & Operations' ? '👥' :
                    category.title === 'Product & Design' ? '🎨' : '📊'}</Typography>
                </Box>
                <Typography 
                  variant="subtitle1" 
                  align="center"
                  className="category-title"
                  sx={{
                    fontWeight: 600,
                    color: themeColors.darkBlue.main,
                    fontSize: '0.875rem',
                  }}
                >
                  {category.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
