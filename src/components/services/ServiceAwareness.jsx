import React from "react";
import {
  Sparkles,
  Users,
  BookOpen,
  TrendingUp,
  Target,
  CheckCircle,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
} from "lucide-react";
import { yearsOfExperience } from "../../data/content";
import { Link } from "react-router-dom";

const ServiceAwareness = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Educational Workshops",
      description:
        "Comprehensive workshops on modern farming techniques, crop selection, and best practices for high-value agriculture.",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description:
        "Insights into market trends, pricing dynamics, and demand forecasts to help farmers make informed decisions.",
    },
    {
      icon: Target,
      title: "Crop Selection Guidance",
      description:
        "Expert advice on selecting the right crops based on soil conditions, climate, and market demand.",
    },
    {
      icon: Users,
      title: "Farmer Meet Programs",
      description:
        "Regular gatherings bringing farmers together to share experiences, learn, and build a supportive community.",
    },
  ];

  const stats = [
    { value: "5000+", label: "Farmers Trained" },
    { value: "200+", label: "Workshops Conducted" },
    { value: "15+", label: "States Covered" },
    { value: "95%", label: "Farmer Satisfaction" },
  ];

  const upcomingEvents = [
    {
      title: "Spice Cultivation Workshop",
      date: "March 15, 2025",
      location: "Kerala",
      type: "Workshop",
    },
    {
      title: "Vanilla Farming Seminar",
      date: "March 22, 2025",
      location: "Karnataka",
      type: "Seminar",
    },
    {
      title: "Contract Farming Orientation",
      date: "April 5, 2025",
      location: "Tamil Nadu",
      type: "Orientation",
    },
  ];

  return (
    <section
      id="creating-awareness"
      className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-5 py-2.5 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Service 01
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Creating
              <span className="block gradient-text">Awareness</span>
            </h2>
            <p className="text-lg text-gray-600 text-justify leading-relaxed mb-6">
              The Sri Lankan Vanilla Initiative is one of the leading pioneers
              in the cultivation and processing of Vanilla in Sri Lanka. With
              more than two decades of experience in Vanilla production, this
              esteemed group is committed to sustainable cultivating and
              carefully oversees each process from start to finish with a
              hands-on approach. Through contract farming partnerships and their
              improved techniques, the Sri Lankan Vanilla Initiative provides
              small and large farmers with an opportunity for success through
              vanilla cultivation. The Initiative also guarantees 100% buyback
              at the farm gate prices that are competitive within the market and
              assurances of a Minimum Support Price. With their expertise,
              passion, and dedication, the Indian Vanilla Initiative has become
              a trusted leader in many communities throughout Sri Lanka.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/src/assets/services/img2.png"
                alt="Farmer Training"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Programs Grid */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Our Awareness Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <program.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Upcoming Events */}
        {/* <div className="bg-primary-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Upcoming Events
                </h3>
                <p className="text-primary-100">
                  Join our upcoming awareness programs
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-4 md:mt-0 text-white font-semibold hover:text-primary-200 group"
              >
                View All Events
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
                    {event.type}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {event.title}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-primary-100 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-primary-100 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceAwareness;
