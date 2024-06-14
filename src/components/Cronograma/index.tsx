import React from 'react';
import './style.css';

interface ScheduleItem {
  time: string;
  event: string;
  location: string;
  description: string;
}

interface DaySchedule {
  day: string;
  schedule: ScheduleItem[];
}

const AnimeFestSchedule: React.FC = () => {
  const schedule: DaySchedule[] = [
    {
      day: 'Sexta-feira',
      schedule: [
        { time: '09:00 - 10:00', event: 'Abertura e Recepção', location: 'Hall Principal', description: 'Boas-vindas aos participantes e breve apresentação do evento.' },
        { time: '10:00 - 11:30', event: 'Painel: "A Evolução do Anime"', location: 'Auditório Principal', description: 'Discussão sobre a evolução do anime desde os anos 80 até os dias atuais.' },
        { time: '11:45 - 13:00', event: 'Exibição: "Clássicos dos Anos 90"', location: 'Sala de Exibição 1', description: 'Sessão de exibição de animes clássicos dos anos 90.' },
        { time: '13:00 - 14:00', event: 'Intervalo para Almoço', location: 'Praça de Alimentação', description: '' },
        { time: '14:00 - 15:30', event: 'Workshop: Desenho de Mangá para Iniciantes', location: 'Sala de Workshops', description: 'Aprenda as técnicas básicas de desenho de mangá com um artista profissional.' },
        { time: '15:45 - 17:00', event: 'Competição de Cosplay', location: 'Palco Principal', description: 'Desfile e concurso de cosplay com prêmios para os melhores trajes.' },
        { time: '17:15 - 18:30', event: 'Painel: "Anime e Cultura Pop"', location: 'Auditório Principal', description: 'Discussão sobre a influência do anime na cultura pop global.' },
        { time: '18:45 - 20:00', event: 'Exibição: "Novidades da Temporada"', location: 'Sala de Exibição 1', description: 'Sessão de exibição dos animes mais populares da temporada atual.' },
      ]
    },
    {
      day: 'Sábado',
      schedule: [
        { time: '09:00 - 10:30', event: 'Painel: "Produção de Anime"', location: 'Auditório Principal', description: 'Bastidores da produção de animes com produtores e diretores convidados.' },
        { time: '10:45 - 12:00', event: 'Exibição: "Filme Anime Surpresa"', location: 'Sala de Exibição 2', description: 'Exibição surpresa de um filme anime aclamado.' },
        { time: '12:00 - 13:00', event: 'Intervalo para Almoço', location: 'Praça de Alimentação', description: '' },
        { time: '13:00 - 14:30', event: 'Workshop: Criação de Personagens', location: 'Sala de Workshops', description: 'Técnicas avançadas para criar personagens memoráveis em mangá e anime.' },
        { time: '14:45 - 16:00', event: 'Competição de Trivia de Anime', location: 'Palco Principal', description: 'Teste seus conhecimentos sobre anime e ganhe prêmios.' },
        { time: '16:15 - 17:30', event: 'Painel: "Futuro do Anime"', location: 'Auditório Principal', description: 'Discussão sobre as tendências futuras do anime e novas tecnologias.' },
        { time: '17:45 - 19:00', event: 'Exibição: "Animes de Ação"', location: 'Sala de Exibição 1', description: 'Sessão de exibição de animes de ação com cenas épicas.' },
      ]
    },
    {
      day: 'Domingo',
      schedule: [
        { time: '09:00 - 10:00', event: 'Painel: "Música em Anime"', location: 'Auditório Principal', description: 'Discussão sobre trilhas sonoras e temas musicais em animes.' },
        { time: '10:15 - 11:30', event: 'Exibição: "Animes de Comédia"', location: 'Sala de Exibição 2', description: 'Sessão de exibição de animes de comédia para começar o dia com risadas.' },
        { time: '11:45 - 13:00', event: 'Workshop: Animação Digital', location: 'Sala de Workshops', description: 'Aprenda as técnicas básicas de animação digital usadas na criação de animes.' },
        { time: '13:00 - 14:00', event: 'Intervalo para Almoço', location: 'Praça de Alimentação', description: '' },
        { time: '14:00 - 15:30', event: 'Competição de AMV (Anime Music Video)', location: 'Palco Principal', description: 'Concurso de vídeos musicais feitos por fãs com cenas de anime.' },
        { time: '15:45 - 17:00', event: 'Painel: "Mangá para Anime: Adaptações"', location: 'Auditório Principal', description: 'Discussão sobre o processo de adaptação de mangás para animes.' },
        { time: '17:15 - 18:30', event: 'Exibição: "Clássicos dos Anos 2000"', location: 'Sala de Exibição 1', description: 'Sessão de exibição de animes clássicos dos anos 2000.' },
        { time: '18:45 - 20:00', event: 'Encerramento e Premiação', location: 'Palco Principal', description: 'Encerramento oficial do evento e entrega de prêmios para os vencedores das competições.' },
      ]
    }
  ];

  return (
    <section id='section-cronograma'>
      <div>
        {schedule.map((daySchedule) => (
          <div key={daySchedule.day}>
            <h2>{daySchedule.day}</h2>
            <table>
              <thead>
                <tr>
                  <th>Horário</th>
                  <th>Evento</th>
                  <th>Local</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {daySchedule.schedule.map((item, index) => (
                  <tr key={index}>
                    <td>{item.time}</td>
                    <td>{item.event}</td>
                    <td>{item.location}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeFestSchedule;
