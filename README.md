# Salon Suite Website

A stunning, modern website for Salon Suite - revolutionary salon management software. This website features cutting-edge animations, hover effects, and a bold, professional design that showcases the software's capabilities.

## 🚀 Features

### Design & Animation
- **Modern Gradient Design**: Beautiful purple-to-blue gradients throughout
- **Floating Shape Animations**: Dynamic background elements that move and rotate
- **Smooth Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive elements with smooth transitions
- **3D Dashboard Preview**: Rotated perspective view of the software interface
- **Typing Animation**: Hero title types out dynamically
- **Counter Animations**: Statistics count up when scrolled into view
- **Parallax Effects**: Background elements move at different speeds

### Interactive Elements
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **CTA Button Animations**: Primary buttons have shine effects and hover states
- **Feature Card Hover**: Cards lift and show gradient borders on hover
- **Dashboard Preview**: Interactive 3D preview of the software

### Technical Features
- **Fully Responsive**: Works perfectly on all device sizes
- **Performance Optimized**: Throttled scroll events and efficient animations
- **Accessibility**: Keyboard navigation and focus management
- **Modern CSS**: CSS Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript**: No framework dependencies

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#6366f1 to #8b5cf6)
- **Secondary**: Orange gradient (#f59e0b to #f97316)
- **Accent**: Green gradient (#10b981 to #059669)
- **Text**: Dark gray (#1f2937) with secondary gray (#6b7280)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900 (Light to Black)
- **Hierarchy**: Clear size and weight differences

### Animations
- **Duration**: 0.3s - 0.8s for most transitions
- **Easing**: Cubic-bezier for smooth, natural movement
- **Performance**: Hardware-accelerated transforms

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout)
- **Tablet**: 768px - 1199px (Adjusted grid)
- **Mobile**: < 768px (Stacked layout)

## 🛠️ File Structure

```
salonsuitewebsite/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Enjoy the animations!** Scroll, hover, and interact with elements

### Local Development

For the best experience, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Sections Overview

### Hero Section
- **Animated Title**: Types out dynamically
- **Floating Shapes**: Background animation elements
- **3D Dashboard Preview**: Interactive software preview
- **Statistics**: Animated counters (10,000+ salons, 99.9% uptime, 24/7 support)
- **CTA Buttons**: Primary and secondary call-to-action buttons

### Features Preview
- **4 Feature Cards**: Smart Booking, Client Management, Analytics, Inventory Control
- **Hover Animations**: Cards lift and show gradient borders
- **Icon Animations**: Icons scale and rotate on hover

### Navigation
- **Fixed Header**: Stays at top with blur effect
- **Smooth Scrolling**: Links scroll to sections
- **Mobile Menu**: Hamburger menu for mobile devices

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    /* ... other colors */
}
```

### Modifying Animations
Adjust animation durations and timing functions:

```css
.feature-card {
    transition: all 0.3s ease; /* Change duration here */
}
```

### Adding New Sections
Follow the existing pattern in `index.html` and add corresponding styles in `styles.css`.

## 🌟 Performance Tips

- **Optimized Images**: Use WebP format when possible
- **Minified CSS/JS**: For production, minify the files
- **CDN Fonts**: Google Fonts are loaded from CDN
- **Efficient Animations**: Using `transform` and `opacity` for smooth performance

## 📄 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🎨 Design Inspiration

This website draws inspiration from:
- Modern SaaS landing pages
- Apple's design language
- Material Design principles
- Current web animation trends

## 📞 Support

For questions or customization requests, please refer to the code comments or create an issue in the repository.

---

**Built with ❤️ for Salon Suite - Revolutionizing salon management software.**
