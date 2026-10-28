import { useEffect, useState } from 'react';
import { getTeamMembers } from '../lib/team';
import PageBanner from '../components/PageBanner';
import type { TeamMember } from '../types';

const Team = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    getTeamMembers()
      .then((data) => {
        setMembers(data);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div>
      <PageBanner
        imageSlug="human-rights-criminal-justice"
        title="Our Legal Team"
        subtitle="Distinguished barristers, solicitors, and legal scholars dedicated to upholding justice with distinction across Nigerian jurisprudence."
      />

      <section className="px-8 py-16">
        {status === 'loading' && <p className="text-center text-gray-500">Loading team...</p>}
        {status === 'error' && (
          <p className="text-center text-red-600">Unable to load team right now.</p>
        )}
        {status === 'loaded' && members.length === 0 && (
          <p className="text-center text-gray-500">Team members coming soon.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member) => (
            <div
              key={member._id}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/5] bg-maroon"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center font-serif text-7xl text-white/70">
                  {member.name.charAt(0)}
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-5 text-center text-white">
                <h3 className="font-serif text-xl font-bold italic">{member.name}</h3>
                <p className="text-sm">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;