import { Card } from '../components/Card';
import { mockTeamMembers } from '../data/mock';

/**
 * About page with mission and team information
 */
export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-100">
            Empowering education, one book at a time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <Card className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Books For Ghana was founded in 2020 (mock) with a simple mission: to ensure every child
                in Ghana has access to quality educational resources. What started as a small initiative
                by a group of passionate educators has grown into a movement connecting thousands of
                generous donors with schools and communities across the country.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that education is the foundation of opportunity. By providing books and
                educational materials to underserved schools, we're investing in the future of Ghana
                and empowering students to reach their full potential.
              </p>
              <p className="text-gray-700">
                Our team works tirelessly to sort, catalog, and distribute every book we receive,
                ensuring that each donation makes maximum impact where it's needed most.
              </p>
            </div>
          </Card>

          {/* Our Mission */}
          <Card className="mb-12 bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">Accessible Education</h3>
                <p className="text-sm text-gray-600">
                  Making quality educational resources available to all students
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2">Community Building</h3>
                <p className="text-sm text-gray-600">
                  Connecting global donors with local communities in need
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Impact</h3>
                <p className="text-sm text-gray-600">
                  Creating lasting change through educational empowerment
                </p>
              </div>
            </div>
          </Card>

          {/* Our Values */}
          <Card className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    We're committed to openness about our operations, finances, and impact.
                    Every donor receives updates on how their contributions are being used.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">♿</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    We ensure our programs reach the most underserved communities, regardless
                    of geographic or economic barriers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsibility</h3>
                  <p className="text-gray-600">
                    Every book is carefully selected to meet local needs and curriculum standards.
                    We work closely with educators to ensure relevance and quality.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Our Team */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockTeamMembers.map((member) => (
                <Card key={member.id} className="text-center">
                  <div className="text-7xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <Card className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Get Involved?</h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
              Whether you donate books, make a financial contribution, or spread the word,
              every action helps us reach more students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="btn bg-white text-primary-600 hover:bg-gray-50">
                Make a Donation
              </a>
              <a href="/how-to-send" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                Send Books
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

