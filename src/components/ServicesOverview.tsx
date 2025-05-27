import {
  ChartBarIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  benefits,
  icon,
}: ServiceCardProps) => {
  return (
    <div className="p-7 lg:p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
      <div className="flex items-center gap-4 mb-5">
        <div className="p-2.5 rounded-lg bg-blue-50">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-base lg:text-lg text-gray-600 mb-5">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-blue-500 text-lg">•</span>
            <span className="text-gray-700 text-base lg:text-lg">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ServicesOverview() {
  const services = [
    {
      title: "Sales Systems",
      description:
        "Automatic lead acquisition systems that use AI to book meetings on your calendar",
      benefits: [
        "Hands-off growth systems that convert prospects into clients",
      ],
      icon: <PresentationChartLineIcon className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Marketing Systems",
      description:
        "Complete done-for-you inbound marketing systems that work on autopilot:",
      benefits: [
        "Lead nurturing sequences that engage prospects autonomously",
        "Automated content distribution across multiple channels",
      ],
      icon: <ChartBarIcon className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Project Management",
      description:
        "Automate your client and project management with CRM systems that keep your agency organized and responsive.",
      benefits: [
        "Automated CRM workflows to track leads, clients, and projects",
        "Automated reminders and task assignments for your team",
        "Pipeline and project status dashboards for full visibility",
      ],
      icon: <ClipboardDocumentListIcon className="w-7 h-7 text-blue-600" />,
    },
  ];

  return (
    <section className="pt-4 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Book more meetings, sell more offers and minimise bloat
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
