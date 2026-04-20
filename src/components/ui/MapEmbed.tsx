export default function MapEmbed() {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337799.5765498!2d7.3!3d48.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8495e18b2c1%3A0x971a483118e7241f!2sStrasbourg!5e0!3m2!1sfr!2sfr!4v1"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Zone d'intervention Ced'elec - Strasbourg et environs"
      />
    </div>
  );
}
