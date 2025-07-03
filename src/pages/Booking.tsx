import React, { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    location: '',
    duration: '',
    addOns: [] as string[],
    totalCost: 0
  });

  const services = [
    { id: 'real-estate', name: 'Real Estate Drone Tour', price: 199, duration: '1-2 hours' },
    { id: 'fpv', name: 'FPV Indoor Flythrough', price: 399, duration: '2-3 hours' },
    { id: 'commercial', name: 'Commercial Promo Video', price: 599, duration: '3-4 hours' },
    { id: 'event', name: 'Event Coverage', price: 799, duration: '4-6 hours' },
    { id: 'inspection', name: 'Roof/Structural Inspection', price: 299, duration: '1-2 hours' },
    { id: 'construction', name: 'Construction Progress', price: 499, duration: '2-3 hours' }
  ];

  const addOns = [
    { id: 'rush', name: 'Rush Delivery (24hrs)', price: 150 },
    { id: 'raw', name: 'Raw Footage Delivery', price: 100 },
    { id: 'social', name: 'Social Media Package', price: 200 },
    { id: 'extended', name: 'Extended Editing', price: 250 }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleServiceSelect = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setBookingData({
        ...bookingData,
        service: serviceId,
        duration: service.duration,
        totalCost: service.price
      });
      setCurrentStep(2);
    }
  };

  const calculateTotal = () => {
    const baseService = services.find(s => s.id === bookingData.service);
    const addOnCosts = bookingData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    return (baseService?.price || 0) + addOnCosts;
  };

  const handleAddOnToggle = (addOnId: string) => {
    const newAddOns = bookingData.addOns.includes(addOnId)
      ? bookingData.addOns.filter(id => id !== addOnId)
      : [...bookingData.addOns, addOnId];
    
    setBookingData({
      ...bookingData,
      addOns: newAddOns,
      totalCost: calculateTotal()
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-sky-500 cursor-pointer transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-2xl font-bold text-sky-600">${service.price}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sky-600 font-medium">
                    <span>Select Service</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Select Date & Time</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Choose Date</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Choose Time</label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setBookingData({ ...bookingData, time })}
                      className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
                        bookingData.time === time
                          ? 'border-sky-500 bg-sky-50 text-sky-600'
                          : 'border-gray-200 hover:border-sky-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">Location Details</label>
              <textarea
                value={bookingData.location}
                onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="Please provide the full address and any specific access instructions..."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                disabled={!bookingData.date || !bookingData.time || !bookingData.location}
                className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Add-On Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {addOns.map((addOn) => (
                <div
                  key={addOn.id}
                  onClick={() => handleAddOnToggle(addOn.id)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    bookingData.addOns.includes(addOn.id)
                      ? 'border-sky-500 bg-sky-50'
                      : 'border-gray-200 hover:border-sky-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{addOn.name}</h3>
                      <span className="text-xl font-bold text-sky-600">+${addOn.price}</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      bookingData.addOns.includes(addOn.id)
                        ? 'border-sky-500 bg-sky-500'
                        : 'border-gray-300'
                    }`}>
                      {bookingData.addOns.includes(addOn.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium">
                    {services.find(s => s.id === bookingData.service)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{new Date(bookingData.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{bookingData.duration}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-sky-600">${calculateTotal()}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your booking has been submitted successfully. We'll contact you within 2 hours to confirm details and process payment.
            </p>
            <div className="bg-sky-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>We'll call you to confirm all details and answer any questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Secure payment processing via invoice or credit card</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Weather monitoring and rescheduling if needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span>Professional shoot and editing process</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentStep(1);
                setBookingData({
                  service: '',
                  date: '',
                  time: '',
                  location: '',
                  duration: '',
                  addOns: [],
                  totalCost: 0
                });
              }}
              className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Book Another Service
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step ? 'bg-sky-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <span className={currentStep >= 1 ? 'text-sky-600 font-medium' : 'text-gray-500'}>Service</span>
            <span className={currentStep >= 2 ? 'text-sky-600 font-medium' : 'text-gray-500'}>Schedule</span>
            <span className={currentStep >= 3 ? 'text-sky-600 font-medium' : 'text-gray-500'}>Add-ons</span>
            <span className={currentStep >= 4 ? 'text-sky-600 font-medium' : 'text-gray-500'}>Confirm</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderStep()}
      </div>
    </div>
  );
};

export default Booking;