function createNetworkNodes() {
  const networkBg = document.querySelector('.network-bg');
  networkBg.innerHTML = '';

  // Create floating logo nodes
  for (let i = 0; i < 30; i++) {
    const node = document.createElement('div');
    node.className = 'network-node';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    // Random movement range
    const tx = (Math.random() - 0.5) * 200;
    const ty = (Math.random() - 0.5) * 200;
    
    node.style.left = `${startX}px`;
    node.style.top = `${startY}px`;
    node.style.setProperty('--tx', `${tx}px`);
    node.style.setProperty('--ty', `${ty}px`);
    
    const size = 15 + Math.random() * 25;
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    
    const duration = 3 + Math.random() * 4;
    node.style.animation = `floatAround ${duration}s infinite`;
    node.style.animationDelay = `${Math.random() * 2}s`;
    
    networkBg.appendChild(node);
  }

  // Create particle lines
  for (let i = 0; i < 20; i++) {
    const line = document.createElement('div');
    line.className = 'particle-line';
    
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const angle = Math.random() * 360;
    
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transform = `rotate(${angle}deg)`;
    
    const duration = 2 + Math.random() * 3;
    line.style.animation = `fadeInOut ${duration}s infinite`;
    line.style.animationDelay = `${Math.random() * 2}s`;
    
    networkBg.appendChild(line);
  }
}

// Update animation interval to be smoother
setInterval(createNetworkNodes, 5000);
createNetworkNodes();



const TASK_TYPES = {
  TELEGRAM: {
    GROUP: 'telegram-group',
    BOT: 'telegram-bot',
    REACTION: 'telegram-reaction',
    COMMENT: 'telegram-comment'
  },
  YOUTUBE: {
    LIKE: 'youtube-like',
    DISLIKE: 'youtube-dislike',
    SUBSCRIBE: 'youtube-subscribe',
    SHARE: 'youtube-share',
    COMMENT: 'youtube-comment'
  },
  FACEBOOK: {
    GROUP: 'facebook-group',
    REACTION: 'facebook-reaction',
    FOLLOW: 'facebook-follow',
    SHARE: 'facebook-share',
    COMMENT: 'facebook-comment'
  },
  INSTAGRAM: {
    FOLLOW: 'instagram-follow',
    LIKE: 'instagram-like',
    SHARE: 'instagram-share',
    COMMENT: 'instagram-comment'
  },
  TWITTER: {
    FOLLOW: 'twitter-follow',
    LIKE: 'twitter-like',
    RETWEET: 'twitter-retweet',
    COMMENT: 'twitter-comment'
  },
  TIKTOK: {
    FOLLOW: 'tiktok-follow',
    LIKE: 'tiktok-like',
    SHARE: 'tiktok-share',
    COMMENT: 'tiktok-comment'
  },
  VIP: {
    APP: 'vip-app'
  }
};
const AFFILIATE_BASE_URL = 'https://example.com/ref/';
window.addEventListener('error', e => {
  if (e.target.tagName === 'IMG') {
    console.warn('Image failed to load:', e.target.src);
  }
});
const app = Vue.createApp({
  data() {
    return {
      currentView: 'tasks',
      balance: 0,
      depositAmount: 0,
      withdrawAmount: 0,
      minWithdraw: 1,
      profilePic: null,
      userData: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        tonAddress: ''
      },
      socialStatus: {
        facebook: false,
        twitter: false,
        telegram: false,
        youtube: false
      },
      newTask: {
        type: 'telegram-group',
        title: '',
        description: '',
        reward: 0.1,
        verificationLink: ''
      },
      tasks: [{
        id: 1,
        title: 'Seguir Canal Telegram',
        description: 'Únete y participa en nuestro canal oficial',
        reward: 0.1,
        timer: 10
      }, {
        id: 2,
        title: 'Like y Compartir en Facebook',
        description: 'Dale like y comparte nuestra última publicación',
        reward: 0.15,
        timer: 10
      }, {
        id: 3,
        title: 'Suscribirse a YouTube',
        description: 'Suscríbete a nuestro canal y activa notificaciones',
        reward: 0.2,
        timer: 10
      }],
      vipTasks: [{
        id: 'vip1',
        title: 'Descargar App Premium',
        description: 'Descarga y prueba nuestra nueva aplicación',
        reward: 0.4,
        timer: 10
      }],
      newsItems: [{
        id: 1,
        title: 'Nuevas Tareas Disponibles',
        content: 'Hemos agregado nuevas oportunidades de ganar TASK PAY',
        date: '2023-11-01'
      }],
      supportTicket: {
        subject: '',
        message: ''
      },
      faqs: [{
        id: 1,
        question: '¿Cómo empiezo a ganar TASK PAY?',
        answer: 'Completa las tareas disponibles en la plataforma'
      }],
      affiliateLink: AFFILIATE_BASE_URL + 'user123',
      affiliateStats: {
        activeReferrals: 0,
        totalEarnings: 0
      },
      notifications: [],
      showNotifications: false,
      accountStats: {
        tasksCompleted: 0,
        totalEarned: 0,
        successRate: 0,
        taskStreak: 0,
        recentTasks: [{
          id: 1,
          title: 'Seguir Canal Telegram',
          reward: 0.1,
          date: '2023-11-01',
          status: 'completed'
        }, {
          id: 2,
          title: 'Like en Facebook',
          reward: 0.15,
          date: '2023-11-01',
          status: 'failed'
        }],
        assignedTasks: [{
          id: 1,
          title: 'Tarea de Telegram',
          reward: 0.2,
          date: '2023-11-01',
          status: 'active'
        }, {
          id: 2,
          title: 'Tarea de Facebook',
          reward: 0.15,
          date: '2023-11-02',
          status: 'completed'
        }]
      },
      ptcTasks: [{
        id: 'ptc1',
        title: 'Visitar Sitio Web',
        description: 'Visita este sitio por 30 segundos',
        reward: 0.01,
        timer: 30,
        url: 'https://example.com'
      }, {
        id: 'ptc2',
        title: 'Ver Anuncio',
        description: 'Mira este anuncio completo',
        reward: 0.02,
        timer: 45,
        url: 'https://example.com/ad'
      }]
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleProfilePicChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.profilePic = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    createTask() {
      if (this.balance >= this.newTask.reward) {
        const task = {
          ...this.newTask,
          id: this.tasks.length + 1,
          timer: 10
        };
        if (this.newTask.type.startsWith('vip-')) {
          task.reward = this.newTask.reward * 2;
        } else {
          task.reward = this.newTask.reward;
        }
        this.tasks.push(task);
        this.balance -= this.newTask.reward;
        this.newTask = {
          type: 'telegram-group',
          title: '',
          description: '',
          reward: 0.1,
          verificationLink: ''
        };
        alert('Tarea creada exitosamente');
      } else {
        alert('Balance insuficiente para crear la tarea');
      }
    },
    startTask(task) {
      let timer = task.timer;
      const interval = setInterval(() => {
        timer--;
        if (timer <= 0) {
          clearInterval(interval);
          this.completeTask(task);
        }
        task.timer = timer;
      }, 60000);
    },
    completeTask(task) {
      this.balance += task.reward;
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.addNotification(`Tarea completada: ${task.title}. Ganaste ${task.reward} TASK PAY`, 'success');
      this.accountStats.tasksCompleted++;
      this.accountStats.totalEarned += task.reward;
      this.accountStats.taskStreak++;
      this.accountStats.successRate = Math.round(this.accountStats.tasksCompleted / (this.accountStats.tasksCompleted + this.accountStats.recentTasks.filter(t => t.status === 'failed').length) * 100);
      this.accountStats.recentTasks.unshift({
        id: Date.now(),
        title: task.title,
        reward: task.reward,
        date: new Date().toLocaleDateString(),
        status: 'completed'
      });
    },
    deposit() {
      try {
        this.balance += Number(this.depositAmount);
        this.depositAmount = 0;
      } catch (e) {
        console.error('Error depositing:', e);
      }
    },
    withdraw() {
      try {
        if (this.withdrawAmount >= this.minWithdraw) {
          this.balance -= Number(this.withdrawAmount);
          this.withdrawAmount = 0;
        }
      } catch (e) {
        console.error('Error withdrawing:', e);
      }
    },
    connectSocial(platform) {
      this.socialStatus[platform] = !this.socialStatus[platform];
      console.log('Connecting to', platform);
    },
    saveProfile() {
      console.log('Saving profile changes', this.userData);
      alert('Cambios guardados exitosamente');
    },
    submitTicket() {
      console.log('Support ticket submitted:', this.supportTicket);
      alert('Ticket enviado correctamente');
      this.supportTicket = {
        subject: '',
        message: ''
      };
    },
    copyAffiliateLink() {
      navigator.clipboard.writeText(this.affiliateLink);
      alert('Enlace copiado al portapapeles');
    },
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    addNotification(message, status = 'success') {
      this.notifications.unshift({
        id: Date.now(),
        message,
        status,
        time: new Date().toLocaleTimeString()
      });
    },
    toggleDropdown(event) {
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== event.currentTarget) {
          d.classList.remove('active');
        }
      });
      event.currentTarget.classList.toggle('active');
    }
  }
}).mount('#app');
document.addEventListener('click', event => {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('active');
    });
  }
});